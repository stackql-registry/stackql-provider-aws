--- 
title: user_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - user_profiles
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

Creates, updates, deletes, gets or lists a <code>user_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.user_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_profile"
    values={[
        { label: 'describe_user_profile', value: 'describe_user_profile' },
        { label: 'list_user_profiles', value: 'list_user_profiles' }
    ]}
>
<TabItem value="describe_user_profile">

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
    <td>The ID of the user's profile in the Amazon Elastic File System volume. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="single_sign_on_user_identifier" /></td>
    <td><code>string</code></td>
    <td>The IAM Identity Center user identifier. (pattern: &lt;code&gt;UserName&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="single_sign_on_user_value" /></td>
    <td><code>string</code></td>
    <td>The IAM Identity Center user value.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="user_profile_arn" /></td>
    <td><code>string</code></td>
    <td>The user profile Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:user-profile/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_profile_name" /></td>
    <td><code>string</code></td>
    <td>The user profile name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_settings" /></td>
    <td><code>object</code></td>
    <td>A collection of settings.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_profiles">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="user_profile_name" /></td>
    <td><code>string</code></td>
    <td>The user profile name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_user_profile"><CopyableCode code="describe_user_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a user profile. For more information, see CreateUserProfile.</td>
</tr>
<tr>
    <td><a href="#list_user_profiles"><CopyableCode code="list_user_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists user profiles.</td>
</tr>
<tr>
    <td><a href="#create_user_profile"><CopyableCode code="create_user_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-UserProfileName"><code>UserProfileName</code></a></td>
    <td></td>
    <td>Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to a domain. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System home directory.</td>
</tr>
<tr>
    <td><a href="#update_user_profile"><CopyableCode code="update_user_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-UserProfileName"><code>UserProfileName</code></a></td>
    <td></td>
    <td>Updates a user profile.</td>
</tr>
<tr>
    <td><a href="#delete_user_profile"><CopyableCode code="delete_user_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.</td>
</tr>
<tr>
    <td><a href="#create_presigned_domain_url"><CopyableCode code="create_presigned_domain_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-UserProfileName"><code>UserProfileName</code></a></td>
    <td></td>
    <td>Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to the domain, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System volume. This operation can only be called when the authentication mode equals IAM. The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app. You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see Connect to Amazon SageMaker AI Studio Through an Interface VPC Endpoint . The URL that you get from a call to CreatePresignedDomainUrl has a default timeout of 5 minutes. You can configure this value using ExpiresInSeconds. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page. The JupyterLab session default expiration time is 12 hours. You can configure this value using SessionExpirationDurationInSeconds.</td>
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
    defaultValue="describe_user_profile"
    values={[
        { label: 'describe_user_profile', value: 'describe_user_profile' },
        { label: 'list_user_profiles', value: 'list_user_profiles' }
    ]}
>
<TabItem value="describe_user_profile">

Describes a user profile. For more information, see CreateUserProfile.

```sql
SELECT
creation_time,
domain_id,
failure_reason,
home_efs_file_system_uid,
last_modified_time,
single_sign_on_user_identifier,
single_sign_on_user_value,
status,
user_profile_arn,
user_profile_name,
user_settings
FROM aws.sagemaker.user_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_profiles">

Lists user profiles.

```sql
SELECT
creation_time,
domain_id,
last_modified_time,
status,
user_profile_name
FROM aws.sagemaker.user_profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_profile"
    values={[
        { label: 'create_user_profile', value: 'create_user_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_profile">

Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to a domain. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System home directory.

```sql
INSERT INTO aws.sagemaker.user_profiles (
DomainId,
UserProfileName,
SingleSignOnUserIdentifier,
SingleSignOnUserValue,
Tags,
UserSettings,
region
)
SELECT 
'{{ DomainId }}' /* required */,
'{{ UserProfileName }}' /* required */,
'{{ SingleSignOnUserIdentifier }}',
'{{ SingleSignOnUserValue }}',
'{{ Tags }}',
'{{ UserSettings }}',
'{{ region }}'
RETURNING
user_profile_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_profiles resource.
    - name: DomainId
      value: "{{ DomainId }}"
      description: |
        Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel.
    - name: UserProfileName
      value: "{{ UserProfileName }}"
      description: |
        A name for the UserProfile. This value is not case sensitive.
    - name: SingleSignOnUserIdentifier
      value: "{{ SingleSignOnUserIdentifier }}"
      description: |
        A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is IAM Identity Center, this field is required. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
    - name: SingleSignOnUserValue
      value: "{{ SingleSignOnUserValue }}"
      description: |
        The username of the associated Amazon Web Services Single Sign-On User for this UserProfile. If the Domain's AuthMode is IAM Identity Center, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
    - name: Tags
      description: |
        Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags that you specify for the User Profile are also added to all Apps that the User Profile launches.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: UserSettings
      description: |
        A collection of settings.
      value:
        ExecutionRole: "{{ ExecutionRole }}"
        SecurityGroups:
          - "{{ SecurityGroups }}"
        SharingSettings:
          NotebookOutputOption: "{{ NotebookOutputOption }}"
          S3OutputPath: "{{ S3OutputPath }}"
          S3KmsKeyId: "{{ S3KmsKeyId }}"
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
        TensorBoardAppSettings:
          DefaultResourceSpec:
            SageMakerImageArn: "{{ SageMakerImageArn }}"
            SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
            SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
            InstanceType: "{{ InstanceType }}"
            LifecycleConfigArn: "{{ LifecycleConfigArn }}"
            TrainingPlanArn: "{{ TrainingPlanArn }}"
        RStudioServerProAppSettings:
          AccessStatus: "{{ AccessStatus }}"
          UserGroup: "{{ UserGroup }}"
        RSessionAppSettings:
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
        CanvasAppSettings:
          TimeSeriesForecastingSettings:
            Status: "{{ Status }}"
            AmazonForecastRoleArn: "{{ AmazonForecastRoleArn }}"
          ModelRegisterSettings:
            Status: "{{ Status }}"
            CrossAccountModelRegisterRoleArn: "{{ CrossAccountModelRegisterRoleArn }}"
          WorkspaceSettings:
            S3ArtifactPath: "{{ S3ArtifactPath }}"
            S3KmsKeyId: "{{ S3KmsKeyId }}"
          IdentityProviderOAuthSettings:
            - DataSourceName: "{{ DataSourceName }}"
              Status: "{{ Status }}"
              SecretArn: "{{ SecretArn }}"
          DirectDeploySettings:
            Status: "{{ Status }}"
          KendraSettings:
            Status: "{{ Status }}"
          GenerativeAiSettings:
            AmazonBedrockRoleArn: "{{ AmazonBedrockRoleArn }}"
          EmrServerlessSettings:
            ExecutionRoleArn: "{{ ExecutionRoleArn }}"
            Status: "{{ Status }}"
        CodeEditorAppSettings:
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
          AppLifecycleManagement:
            IdleSettings:
              LifecycleManagement: "{{ LifecycleManagement }}"
              IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
              MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
              MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
          BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
        JupyterLabAppSettings:
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
          CodeRepositories:
            - RepositoryUrl: "{{ RepositoryUrl }}"
          AppLifecycleManagement:
            IdleSettings:
              LifecycleManagement: "{{ LifecycleManagement }}"
              IdleTimeoutInMinutes: {{ IdleTimeoutInMinutes }}
              MinIdleTimeoutInMinutes: {{ MinIdleTimeoutInMinutes }}
              MaxIdleTimeoutInMinutes: {{ MaxIdleTimeoutInMinutes }}
          EmrSettings:
            AssumableRoleArns:
              - "{{ AssumableRoleArns }}"
            ExecutionRoleArns:
              - "{{ ExecutionRoleArns }}"
          BuiltInLifecycleConfigArn: "{{ BuiltInLifecycleConfigArn }}"
        SpaceStorageSettings:
          DefaultEbsStorageSettings:
            DefaultEbsVolumeSizeInGb: {{ DefaultEbsVolumeSizeInGb }}
            MaximumEbsVolumeSizeInGb: {{ MaximumEbsVolumeSizeInGb }}
        DefaultLandingUri: "{{ DefaultLandingUri }}"
        StudioWebPortal: "{{ StudioWebPortal }}"
        CustomPosixUserConfig:
          Uid: {{ Uid }}
          Gid: {{ Gid }}
        CustomFileSystemConfigs:
          - EFSFileSystemConfig:
              FileSystemId: "{{ FileSystemId }}"
              FileSystemPath: "{{ FileSystemPath }}"
            FSxLustreFileSystemConfig:
              FileSystemId: "{{ FileSystemId }}"
              FileSystemPath: "{{ FileSystemPath }}"
            S3FileSystemConfig:
              MountPath: "{{ MountPath }}"
              S3Uri: "{{ S3Uri }}"
        StudioWebPortalSettings:
          HiddenMlTools:
            - "{{ HiddenMlTools }}"
          HiddenAppTypes:
            - "{{ HiddenAppTypes }}"
          HiddenInstanceTypes:
            - "{{ HiddenInstanceTypes }}"
          HiddenSageMakerImageVersionAliases:
            - SageMakerImageName: "{{ SageMakerImageName }}"
              VersionAliases: "{{ VersionAliases }}"
          ExecutionRoleSessionNameMode: "{{ ExecutionRoleSessionNameMode }}"
        AutoMountHomeEFS: "{{ AutoMountHomeEFS }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_profile"
    values={[
        { label: 'update_user_profile', value: 'update_user_profile' }
    ]}
>
<TabItem value="update_user_profile">

Updates a user profile.

```sql
UPDATE aws.sagemaker.user_profiles
SET 
DomainId = '{{ DomainId }}',
UserProfileName = '{{ UserProfileName }}',
UserSettings = '{{ UserSettings }}'
WHERE 
region = '{{ region }}' --required
AND DomainId = '{{ DomainId }}' --required
AND UserProfileName = '{{ UserProfileName }}' --required
RETURNING
user_profile_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_profile"
    values={[
        { label: 'delete_user_profile', value: 'delete_user_profile' }
    ]}
>
<TabItem value="delete_user_profile">

Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.

```sql
DELETE FROM aws.sagemaker.user_profiles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_presigned_domain_url"
    values={[
        { label: 'create_presigned_domain_url', value: 'create_presigned_domain_url' }
    ]}
>
<TabItem value="create_presigned_domain_url">

Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to the domain, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System volume. This operation can only be called when the authentication mode equals IAM. The IAM role or user passed to this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app. You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see Connect to Amazon SageMaker AI Studio Through an Interface VPC Endpoint . The URL that you get from a call to CreatePresignedDomainUrl has a default timeout of 5 minutes. You can configure this value using ExpiresInSeconds. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page. The JupyterLab session default expiration time is 12 hours. You can configure this value using SessionExpirationDurationInSeconds.

```sql
EXEC aws.sagemaker.user_profiles.create_presigned_domain_url 
@region='{{ region }}' --required 
@@json=
'{
"DomainId": "{{ DomainId }}", 
"UserProfileName": "{{ UserProfileName }}", 
"SessionExpirationDurationInSeconds": {{ SessionExpirationDurationInSeconds }}, 
"ExpiresInSeconds": {{ ExpiresInSeconds }}, 
"SpaceName": "{{ SpaceName }}", 
"LandingUri": "{{ LandingUri }}"
}'
;
```
</TabItem>
</Tabs>
