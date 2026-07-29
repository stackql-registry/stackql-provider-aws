--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="describe_app">

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
    <td><CopyableCode code="app_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:app/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_name" /></td>
    <td><code>string</code></td>
    <td>The name of the app. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_type" /></td>
    <td><code>string</code></td>
    <td>The type of app. (JupyterServer, KernelGateway, DetailedProfiler, TensorBoard, CodeEditor, JupyterLab, RStudioServerPro, RSessionGateway, Canvas)</td>
</tr>
<tr>
    <td><CopyableCode code="built_in_lifecycle_config_arn" /></td>
    <td><code>string</code></td>
    <td>The lifecycle configuration that runs before the default lifecycle configuration (pattern: &lt;code&gt;(arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:studio-lifecycle-config/.*|None)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the application. After an application has been shut down for 24 hours, SageMaker AI deletes all metadata for the application. To be considered an update and retain application metadata, applications must be restarted within 24 hours after the previous application has been shut down. After this time window, creation of an application is considered a new application rather than an update of the previous application.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>Types duplicated from IronmanApiServiceModel for federation. These types are defined in other service directories and are not available via IronmanApiServiceCommonModel. (pattern: &lt;code&gt;d-(-*&#91;a-z0-9&#93;)&#123;1,61&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="effective_trusted_identity_propagation_status" /></td>
    <td><code>string</code></td>
    <td>The effective status of Trusted Identity Propagation (TIP) for this application. When enabled, user identities from IAM Identity Center are being propagated through the application to TIP enabled Amazon Web Services services. When disabled, standard IAM role-based access is used. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="last_health_check_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last health check.</td>
</tr>
<tr>
    <td><CopyableCode code="last_user_activity_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last user's activity. LastUserActivityTimestamp is also updated when SageMaker AI performs health checks without user activity. As a result, this value is set to the same value as LastHealthCheckTimestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_mode" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the application is launched in recovery mode.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_spec" /></td>
    <td><code>object</code></td>
    <td>Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on. When both SageMakerImageVersionArn and SageMakerImageArn are passed, SageMakerImageVersionArn is used. Any updates to SageMakerImageArn will not take effect if SageMakerImageVersionArn already exists in the ResourceSpec because SageMakerImageVersionArn always takes precedence. To clear the value set for SageMakerImageVersionArn, pass None as the value.</td>
</tr>
<tr>
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space. If this value is not set, then UserProfileName must be set. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleted, Deleting, Failed, InService, Pending)</td>
</tr>
<tr>
    <td><CopyableCode code="user_profile_name" /></td>
    <td><code>string</code></td>
    <td>The user profile name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apps">

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
    <td><CopyableCode code="app_name" /></td>
    <td><code>string</code></td>
    <td>The name of the app. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_type" /></td>
    <td><code>string</code></td>
    <td>The type of app. (JupyterServer, KernelGateway, DetailedProfiler, TensorBoard, CodeEditor, JupyterLab, RStudioServerPro, RSessionGateway, Canvas)</td>
</tr>
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
    <td><CopyableCode code="resource_spec" /></td>
    <td><code>object</code></td>
    <td>Specifies the ARN's of a SageMaker AI image and SageMaker AI image version, and the instance type that the version runs on. When both SageMakerImageVersionArn and SageMakerImageArn are passed, SageMakerImageVersionArn is used. Any updates to SageMakerImageArn will not take effect if SageMakerImageVersionArn already exists in the ResourceSpec because SageMakerImageVersionArn always takes precedence. To clear the value set for SageMakerImageVersionArn, pass None as the value.</td>
</tr>
<tr>
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status. (Deleted, Deleting, Failed, InService, Pending)</td>
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
    <td><a href="#describe_app"><CopyableCode code="describe_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the app.</td>
</tr>
<tr>
    <td><a href="#list_apps"><CopyableCode code="list_apps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists apps.</td>
</tr>
<tr>
    <td><a href="#create_app"><CopyableCode code="create_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-AppType"><code>AppType</code></a>, <a href="#parameter-AppName"><code>AppName</code></a></td>
    <td></td>
    <td>Creates a running app for the specified UserProfile. This operation is automatically invoked by Amazon SageMaker AI upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.</td>
</tr>
<tr>
    <td><a href="#delete_app"><CopyableCode code="delete_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to stop and delete an app.</td>
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
    defaultValue="describe_app"
    values={[
        { label: 'describe_app', value: 'describe_app' },
        { label: 'list_apps', value: 'list_apps' }
    ]}
>
<TabItem value="describe_app">

Describes the app.

```sql
SELECT
app_arn,
app_name,
app_type,
built_in_lifecycle_config_arn,
creation_time,
domain_id,
effective_trusted_identity_propagation_status,
failure_reason,
last_health_check_timestamp,
last_user_activity_timestamp,
recovery_mode,
resource_spec,
space_name,
status,
user_profile_name
FROM aws.sagemaker.apps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_apps">

Lists apps.

```sql
SELECT
app_name,
app_type,
creation_time,
domain_id,
resource_spec,
space_name,
status,
user_profile_name
FROM aws.sagemaker.apps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app"
    values={[
        { label: 'create_app', value: 'create_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app">

Creates a running app for the specified UserProfile. This operation is automatically invoked by Amazon SageMaker AI upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.

```sql
INSERT INTO aws.sagemaker.apps (
DomainId,
UserProfileName,
SpaceName,
AppType,
AppName,
Tags,
ResourceSpec,
RecoveryMode,
region
)
SELECT 
'{{ DomainId }}' /* required */,
'{{ UserProfileName }}',
'{{ SpaceName }}',
'{{ AppType }}' /* required */,
'{{ AppName }}' /* required */,
'{{ Tags }}',
'{{ ResourceSpec }}',
{{ RecoveryMode }},
'{{ region }}'
RETURNING
app_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: apps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the apps resource.
    - name: DomainId
      value: "{{ DomainId }}"
      description: |
        The domain ID.
    - name: UserProfileName
      value: "{{ UserProfileName }}"
      description: |
        The user profile name. If this value is not set, then SpaceName must be set.
    - name: SpaceName
      value: "{{ SpaceName }}"
      description: |
        The name of the space. If this value is not set, then UserProfileName must be set.
    - name: AppType
      value: "{{ AppType }}"
      description: |
        The type of app.
      valid_values: ['JupyterServer', 'KernelGateway', 'DetailedProfiler', 'TensorBoard', 'CodeEditor', 'JupyterLab', 'RStudioServerPro', 'RSessionGateway', 'Canvas']
    - name: AppName
      value: "{{ AppName }}"
      description: |
        The name of the app.
    - name: Tags
      description: |
        Each tag consists of a key and an optional value. Tag keys must be unique per resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ResourceSpec
      description: |
        The instance type and the Amazon Resource Name (ARN) of the SageMaker AI image created on the instance. The value of InstanceType passed as part of the ResourceSpec in the CreateApp call overrides the value passed as part of the ResourceSpec configured for the user profile or the domain. If InstanceType is not specified in any of those three ResourceSpec values for a KernelGateway app, the CreateApp call fails with a request validation error.
      value:
        SageMakerImageArn: "{{ SageMakerImageArn }}"
        SageMakerImageVersionArn: "{{ SageMakerImageVersionArn }}"
        SageMakerImageVersionAlias: "{{ SageMakerImageVersionAlias }}"
        InstanceType: "{{ InstanceType }}"
        LifecycleConfigArn: "{{ LifecycleConfigArn }}"
        TrainingPlanArn: "{{ TrainingPlanArn }}"
    - name: RecoveryMode
      value: {{ RecoveryMode }}
      description: |
        Indicates whether the application is launched in recovery mode.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app"
    values={[
        { label: 'delete_app', value: 'delete_app' }
    ]}
>
<TabItem value="delete_app">

Used to stop and delete an app.

```sql
DELETE FROM aws.sagemaker.apps
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
