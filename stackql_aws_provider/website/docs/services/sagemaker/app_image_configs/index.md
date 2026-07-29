--- 
title: app_image_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - app_image_configs
  - sagemaker
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>app_image_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_image_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.app_image_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_image_config"
    values={[
        { label: 'describe_app_image_config', value: 'describe_app_image_config' },
        { label: 'list_app_image_configs', value: 'list_app_image_configs' }
    ]}
>
<TabItem value="describe_app_image_config">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="app_image_config_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppImageConfig. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:app-image-config/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_image_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of the AppImageConfig. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_editor_app_image_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Code Editor app.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the AppImageConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="jupyter_lab_app_image_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the JupyterLab app.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel_gateway_image_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of a KernelGateway app.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the AppImageConfig was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_image_configs">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="app_image_config_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppImageConfig. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:app-image-config/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_image_config_name" /></td>
    <td><code>string</code></td>
    <td>The name of the AppImageConfig. Must be unique to your account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="code_editor_app_image_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for the file system and the runtime, such as the environment variables and entry point.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the AppImageConfig was created.</td>
</tr>
<tr>
    <td><CopyableCode code="jupyter_lab_app_image_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for the file system and the runtime, such as the environment variables and entry point.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel_gateway_image_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for the file system and kernels in the SageMaker AI image.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the AppImageConfig was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_app_image_config"><CopyableCode code="describe_app_image_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an AppImageConfig.</td>
</tr>
<tr>
    <td><a href="#list_app_image_configs"><CopyableCode code="list_app_image_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string.</td>
</tr>
<tr>
    <td><a href="#create_app_image_config"><CopyableCode code="create_app_image_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppImageConfigName"><code>AppImageConfigName</code></a></td>
    <td></td>
    <td>Creates a configuration for running a SageMaker AI image as a KernelGateway app. The configuration specifies the Amazon Elastic File System storage volume on the image, and a list of the kernels in the image.</td>
</tr>
<tr>
    <td><a href="#update_app_image_config"><CopyableCode code="update_app_image_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppImageConfigName"><code>AppImageConfigName</code></a></td>
    <td></td>
    <td>Updates the properties of an AppImageConfig.</td>
</tr>
<tr>
    <td><a href="#delete_app_image_config"><CopyableCode code="delete_app_image_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an AppImageConfig.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app_image_config"
    values={[
        { label: 'describe_app_image_config', value: 'describe_app_image_config' },
        { label: 'list_app_image_configs', value: 'list_app_image_configs' }
    ]}
>
<TabItem value="describe_app_image_config">

Describes an AppImageConfig.

```sql
SELECT
app_image_config_arn,
app_image_config_name,
code_editor_app_image_config,
creation_time,
jupyter_lab_app_image_config,
kernel_gateway_image_config,
last_modified_time
FROM aws.sagemaker.app_image_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_image_configs">

Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string.

```sql
SELECT
app_image_config_arn,
app_image_config_name,
code_editor_app_image_config,
creation_time,
jupyter_lab_app_image_config,
kernel_gateway_image_config,
last_modified_time
FROM aws.sagemaker.app_image_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_image_config"
    values={[
        { label: 'create_app_image_config', value: 'create_app_image_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_image_config">

Creates a configuration for running a SageMaker AI image as a KernelGateway app. The configuration specifies the Amazon Elastic File System storage volume on the image, and a list of the kernels in the image.

```sql
INSERT INTO aws.sagemaker.app_image_configs (
AppImageConfigName,
Tags,
KernelGatewayImageConfig,
JupyterLabAppImageConfig,
CodeEditorAppImageConfig,
region
)
SELECT 
'{{ AppImageConfigName }}' /* required */,
'{{ Tags }}',
'{{ KernelGatewayImageConfig }}',
'{{ JupyterLabAppImageConfig }}',
'{{ CodeEditorAppImageConfig }}',
'{{ region }}'
RETURNING
app_image_config_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_image_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_image_configs resource.
    - name: AppImageConfigName
      value: "{{ AppImageConfigName }}"
      description: |
        The name of the AppImageConfig. Must be unique to your account.
    - name: Tags
      description: |
        A list of tags to apply to the AppImageConfig.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: KernelGatewayImageConfig
      description: |
        The KernelGatewayImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel will be shown to users before the image starts. Once the image runs, all kernels are visible in JupyterLab.
      value:
        KernelSpecs:
          - Name: "{{ Name }}"
            DisplayName: "{{ DisplayName }}"
        FileSystemConfig:
          MountPath: "{{ MountPath }}"
          DefaultUid: {{ DefaultUid }}
          DefaultGid: {{ DefaultGid }}
    - name: JupyterLabAppImageConfig
      description: |
        The JupyterLabAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in JupyterLab.
      value:
        FileSystemConfig:
          MountPath: "{{ MountPath }}"
          DefaultUid: {{ DefaultUid }}
          DefaultGid: {{ DefaultGid }}
        ContainerConfig:
          ContainerArguments:
            - "{{ ContainerArguments }}"
          ContainerEntrypoint:
            - "{{ ContainerEntrypoint }}"
          ContainerEnvironmentVariables: "{{ ContainerEnvironmentVariables }}"
    - name: CodeEditorAppImageConfig
      description: |
        The CodeEditorAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in Code Editor.
      value:
        FileSystemConfig:
          MountPath: "{{ MountPath }}"
          DefaultUid: {{ DefaultUid }}
          DefaultGid: {{ DefaultGid }}
        ContainerConfig:
          ContainerArguments:
            - "{{ ContainerArguments }}"
          ContainerEntrypoint:
            - "{{ ContainerEntrypoint }}"
          ContainerEnvironmentVariables: "{{ ContainerEnvironmentVariables }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_image_config"
    values={[
        { label: 'update_app_image_config', value: 'update_app_image_config' }
    ]}
>
<TabItem value="update_app_image_config">

Updates the properties of an AppImageConfig.

```sql
UPDATE aws.sagemaker.app_image_configs
SET 
AppImageConfigName = '{{ AppImageConfigName }}',
KernelGatewayImageConfig = '{{ KernelGatewayImageConfig }}',
JupyterLabAppImageConfig = '{{ JupyterLabAppImageConfig }}',
CodeEditorAppImageConfig = '{{ CodeEditorAppImageConfig }}'
WHERE 
region = '{{ region }}' --required
AND AppImageConfigName = '{{ AppImageConfigName }}' --required
RETURNING
app_image_config_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_image_config"
    values={[
        { label: 'delete_app_image_config', value: 'delete_app_image_config' }
    ]}
>
<TabItem value="delete_app_image_config">

Deletes an AppImageConfig.

```sql
DELETE FROM aws.sagemaker.app_image_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
