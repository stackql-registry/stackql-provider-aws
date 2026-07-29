--- 
title: spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - spaces
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

Creates, updates, deletes, gets or lists a <code>spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_space"
    values={[
        { label: 'describe_space', value: 'describe_space' },
        { label: 'list_spaces', value: 'list_spaces' }
    ]}
>
<TabItem value="describe_space">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel. (pattern: &lt;code&gt;d-(-*&#91;a-z0-9&#93;)&#123;1,61&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="home_efs_file_system_uid" /></td>
    <td><code>string</code></td>
    <td>The ID of the space's profile in the Amazon EFS volume. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="ownership_settings" /></td>
    <td><code>object</code></td>
    <td>The collection of ownership settings for a space.</td>
</tr>
<tr>
    <td><CopyableCode code="space_arn" /></td>
    <td><code>string</code></td>
    <td>The space's Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:space/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space that appears in the Amazon SageMaker Studio UI. (pattern: &lt;code&gt;(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_settings" /></td>
    <td><code>object</code></td>
    <td>A collection of space settings.</td>
</tr>
<tr>
    <td><CopyableCode code="space_sharing_settings" /></td>
    <td><code>object</code></td>
    <td>The collection of space sharing settings for a space.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Returns the URL of the space. If the space is created with Amazon Web Services IAM Identity Center (Successor to Amazon Web Services Single Sign-On) authentication, users can navigate to the URL after appending the respective redirect parameter for the application type to be federated through Amazon Web Services IAM Identity Center. The following application types are supported: Studio Classic: &redirect=JupyterServer JupyterLab: &redirect=JupyterLab Code Editor, based on Code-OSS, Visual Studio Code - Open Source: &redirect=CodeEditor</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_spaces">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel. (pattern: &lt;code&gt;d-(-*&#91;a-z0-9&#93;)&#123;1,61&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="ownership_settings_summary" /></td>
    <td><code>object</code></td>
    <td>Specifies summary information about the ownership settings.</td>
</tr>
<tr>
    <td><CopyableCode code="space_display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space that appears in the Studio UI. (pattern: &lt;code&gt;(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="space_settings_summary" /></td>
    <td><code>object</code></td>
    <td>Specifies summary information about the space settings.</td>
</tr>
<tr>
    <td><CopyableCode code="space_sharing_settings_summary" /></td>
    <td><code>object</code></td>
    <td>Specifies summary information about the space sharing settings.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)</td>
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
    <td><a href="#describe_space"><CopyableCode code="describe_space" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the space.</td>
</tr>
<tr>
    <td><a href="#list_spaces"><CopyableCode code="list_spaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists spaces.</td>
</tr>
<tr>
    <td><a href="#create_space"><CopyableCode code="create_space" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-SpaceName"><code>SpaceName</code></a></td>
    <td></td>
    <td>Creates a private space or a space used for real time collaboration in a domain.</td>
</tr>
<tr>
    <td><a href="#update_space"><CopyableCode code="update_space" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-SpaceName"><code>SpaceName</code></a></td>
    <td></td>
    <td>Updates the settings of a space. You can't edit the app type of a space in the SpaceSettings.</td>
</tr>
<tr>
    <td><a href="#delete_space"><CopyableCode code="delete_space" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to delete a space.</td>
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
    defaultValue="describe_space"
    values={[
        { label: 'describe_space', value: 'describe_space' },
        { label: 'list_spaces', value: 'list_spaces' }
    ]}
>
<TabItem value="describe_space">

Describes the space.

```sql
SELECT
creation_time,
domain_id,
failure_reason,
home_efs_file_system_uid,
last_modified_time,
ownership_settings,
space_arn,
space_display_name,
space_name,
space_settings,
space_sharing_settings,
status,
url
FROM aws.sagemaker.spaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_spaces">

Lists spaces.

```sql
SELECT
creation_time,
domain_id,
last_modified_time,
ownership_settings_summary,
space_display_name,
space_name,
space_settings_summary,
space_sharing_settings_summary,
status
FROM aws.sagemaker.spaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_space"
    values={[
        { label: 'create_space', value: 'create_space' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_space">

Creates a private space or a space used for real time collaboration in a domain.

```sql
INSERT INTO aws.sagemaker.spaces (
DomainId,
SpaceName,
Tags,
SpaceSettings,
OwnershipSettings,
SpaceSharingSettings,
SpaceDisplayName,
region
)
SELECT 
'{{ DomainId }}' /* required */,
'{{ SpaceName }}' /* required */,
'{{ Tags }}',
'{{ SpaceSettings }}',
'{{ OwnershipSettings }}',
'{{ SpaceSharingSettings }}',
'{{ SpaceDisplayName }}',
'{{ region }}'
RETURNING
space_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: spaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the spaces resource.
    - name: DomainId
      value: "{{ DomainId }}"
      description: |
        Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel.
    - name: SpaceName
      value: "{{ SpaceName }}"
      description: |
        The name of the space.
    - name: Tags
      description: |
        Tags to associated with the space. Each tag consists of a key and an optional value. Tag keys must be unique for each resource. Tags are searchable using the Search API.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SpaceSettings
      description: |
        A collection of space settings.
      value:
        JupyterServerAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
          CodeRepositories:
            - RepositoryUrl: "{{ RepositoryUrl }}"
        KernelGatewayAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CustomImages:
            - ImageName: "{{ ImageName }}"
              ImageVersionNumber: {{ ImageVersionNumber }}
              AppImageConfigName: "{{ AppImageConfigName }}"
          LifecycleConfigArns:
            - "{{ LifecycleConfigArns }}"
        CodeEditorAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          AppLifecycleManagement:
            IdleSettings:
              IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
        JupyterLabAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
          CodeRepositories:
            - RepositoryUrl: "{{ RepositoryUrl }}"
          AppLifecycleManagement:
            IdleSettings:
              IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
        AppType: "{{ AppType }}"
        SpaceStorageSettings:
          EbsStorageSettings:
            EbsVolumeSizeInGb: {{ EbsVolumeSizeInGb }}
        SpaceManagedResources: "{{ SpaceManagedResources }}"
        CustomFileSystems:
          - EFSFileSystem:
              FileSystemId: "{{ FileSystemId }}"
            FSxLustreFileSystem:
              FileSystemId: "{{ FileSystemId }}"
            S3FileSystem:
              S3Uri: "{{ S3Uri }}"
        RemoteAccess: "{{ RemoteAccess }}"
    - name: OwnershipSettings
      description: |
        A collection of ownership settings.
      value:
        OwnerUserProfileName: "{{ OwnerUserProfileName }}"
    - name: SpaceSharingSettings
      description: |
        A collection of space sharing settings.
      value:
        SharingType: "{{ SharingType }}"
    - name: SpaceDisplayName
      value: "{{ SpaceDisplayName }}"
      description: |
        The name of the space that appears in the SageMaker Studio UI.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_space"
    values={[
        { label: 'update_space', value: 'update_space' }
    ]}
>
<TabItem value="update_space">

Updates the settings of a space. You can't edit the app type of a space in the SpaceSettings.

```sql
UPDATE aws.sagemaker.spaces
SET 
DomainId = '{{ DomainId }}',
SpaceName = '{{ SpaceName }}',
SpaceSettings = '{{ SpaceSettings }}',
SpaceDisplayName = '{{ SpaceDisplayName }}'
WHERE 
region = '{{ region }}' --required
AND DomainId = '{{ DomainId }}' --required
AND SpaceName = '{{ SpaceName }}' --required
RETURNING
space_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_space"
    values={[
        { label: 'delete_space', value: 'delete_space' }
    ]}
>
<TabItem value="delete_space">

Used to delete a space.

```sql
DELETE FROM aws.sagemaker.spaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
