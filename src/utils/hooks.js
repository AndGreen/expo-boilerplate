import {useCallback} from 'react';
import {Platform, useColorScheme} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';

export const useIsDark = () => {
  const scheme = useColorScheme();
  return scheme === 'dark';
};

export const usePlatform = () => {
  const isIos = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';
  return {isIos, isAndroid};
};

export const useSaveFile = (fileName, fileData) => {
  const [status] = MediaLibrary.usePermissions();
  return useCallback(async () => {
    if (status !== 'none') {
      let fileUri = FileSystem.documentDirectory + fileName;
      await FileSystem.writeAsStringAsync(fileUri, fileData, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      await Sharing.shareAsync(fileUri);
    }
  }, []);
};

export const useReadFile = () => {
  const [status] = MediaLibrary.usePermissions();
  return useCallback(async onSuccess => {
    if (status !== 'none') {
      const document = await DocumentPicker.getDocumentAsync({
        // copyToCacheDirectory: true,
      });
      const data = await FileSystem.readAsStringAsync(document.uri);
      onSuccess(data);
    }
  }, []);
};
