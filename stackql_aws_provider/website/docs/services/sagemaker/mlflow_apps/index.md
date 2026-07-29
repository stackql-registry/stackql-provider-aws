--- 
title: mlflow_apps
hide_title: false
hide_table_of_contents: false
keywords:
  - mlflow_apps
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

Creates, updates, deletes, gets or lists a <code>mlflow_apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mlflow_apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.mlflow_apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mlflow_app"
    values={[
        { label: 'describe_mlflow_app', value: 'describe_mlflow_app' }
    ]}
>
<TabItem value="describe_mlflow_app">

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
    <td><CopyableCode code="account_default_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this MLflow app is the default for the entire account. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the MLflow App. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:mlflow-app/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="artifact_store_uri" /></td>
    <td><code>string</code></td>
    <td>The S3 URI of the general purpose bucket used as the MLflow App artifact store. (pattern: &lt;code&gt;(https|s3):​//(&#91;^/&#93;+)/?(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MLflow App was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_domain_id_list" /></td>
    <td><code>array</code></td>
    <td>List of SageMaker Domain IDs for which this MLflow App is the default.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the MLflow App was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_status" /></td>
    <td><code>string</code></td>
    <td>Current maintenance status of the MLflow App. (MaintenanceInProgress, MaintenanceComplete, MaintenanceFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="mlflow_version" /></td>
    <td><code>string</code></td>
    <td>The MLflow version used. (pattern: &lt;code&gt;&#91;0-9&#93;*.&#91;0-9&#93;*.&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="model_registration_mode" /></td>
    <td><code>string</code></td>
    <td>Whether automatic registration of new MLflow models to the SageMaker Model Registry is enabled. (AutoModelRegistrationEnabled, AutoModelRegistrationDisabled)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the MLflow App. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current creation status of the described MLflow App. (Creating, Created, CreateFailed, Updating, Updated, UpdateFailed, Deleting, DeleteFailed, Deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="weekly_maintenance_window_start" /></td>
    <td><code>string</code></td>
    <td>The day and time of the week when weekly maintenance occurs. (pattern: &lt;code&gt;(Mon|Tue|Wed|Thu|Fri|Sat|Sun):(&#91;01&#93;\d|2&#91;0-3&#93;):(&#91;0-5&#93;\d)&lt;/code&gt;)</td>
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
    <td><a href="#describe_mlflow_app"><CopyableCode code="describe_mlflow_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an MLflow App.</td>
</tr>
<tr>
    <td><a href="#create_mlflow_app"><CopyableCode code="create_mlflow_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArtifactStoreUri"><code>ArtifactStoreUri</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store.</td>
</tr>
<tr>
    <td><a href="#update_mlflow_app"><CopyableCode code="update_mlflow_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an MLflow App.</td>
</tr>
<tr>
    <td><a href="#delete_mlflow_app"><CopyableCode code="delete_mlflow_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an MLflow App.</td>
</tr>
<tr>
    <td><a href="#list_mlflow_apps"><CopyableCode code="list_mlflow_apps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all MLflow Apps</td>
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
    defaultValue="describe_mlflow_app"
    values={[
        { label: 'describe_mlflow_app', value: 'describe_mlflow_app' }
    ]}
>
<TabItem value="describe_mlflow_app">

Returns information about an MLflow App.

```sql
SELECT
account_default_status,
arn,
artifact_store_uri,
created_by,
creation_time,
default_domain_id_list,
last_modified_by,
last_modified_time,
maintenance_status,
mlflow_version,
model_registration_mode,
name,
role_arn,
status,
weekly_maintenance_window_start
FROM aws.sagemaker.mlflow_apps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mlflow_app"
    values={[
        { label: 'create_mlflow_app', value: 'create_mlflow_app' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mlflow_app">

Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store.

```sql
INSERT INTO aws.sagemaker.mlflow_apps (
Name,
ArtifactStoreUri,
RoleArn,
ModelRegistrationMode,
WeeklyMaintenanceWindowStart,
AccountDefaultStatus,
DefaultDomainIdList,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ ArtifactStoreUri }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ ModelRegistrationMode }}',
'{{ WeeklyMaintenanceWindowStart }}',
'{{ AccountDefaultStatus }}',
'{{ DefaultDomainIdList }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mlflow_apps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mlflow_apps resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A string identifying the MLflow app name. This string is not part of the tracking server ARN.
    - name: ArtifactStoreUri
      value: "{{ ArtifactStoreUri }}"
      description: |
        The S3 URI for a general purpose bucket to use as the MLflow App artifact store.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow App uses to access the artifact store in Amazon S3. The role should have the AmazonS3FullAccess permission.
    - name: ModelRegistrationMode
      value: "{{ ModelRegistrationMode }}"
      description: |
        Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. To enable automatic model registration, set this value to AutoModelRegistrationEnabled. To disable automatic model registration, set this value to AutoModelRegistrationDisabled. If not specified, AutomaticModelRegistration defaults to AutoModelRegistrationDisabled.
      valid_values: ['AutoModelRegistrationEnabled', 'AutoModelRegistrationDisabled']
    - name: WeeklyMaintenanceWindowStart
      value: "{{ WeeklyMaintenanceWindowStart }}"
      description: |
        The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: TUE:03:30.
    - name: AccountDefaultStatus
      value: "{{ AccountDefaultStatus }}"
      description: |
        Indicates whether this MLflow app is the default for the entire account.
      valid_values: ['ENABLED', 'DISABLED']
    - name: DefaultDomainIdList
      value:
        - "{{ DefaultDomainIdList }}"
      description: |
        List of SageMaker domain IDs for which this MLflow App is used as the default.
    - name: Tags
      description: |
        Tags consisting of key-value pairs used to manage metadata for the MLflow App.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mlflow_app"
    values={[
        { label: 'update_mlflow_app', value: 'update_mlflow_app' }
    ]}
>
<TabItem value="update_mlflow_app">

Updates an MLflow App.

```sql
UPDATE aws.sagemaker.mlflow_apps
SET 
Arn = '{{ Arn }}',
Name = '{{ Name }}',
ArtifactStoreUri = '{{ ArtifactStoreUri }}',
ModelRegistrationMode = '{{ ModelRegistrationMode }}',
WeeklyMaintenanceWindowStart = '{{ WeeklyMaintenanceWindowStart }}',
DefaultDomainIdList = '{{ DefaultDomainIdList }}',
AccountDefaultStatus = '{{ AccountDefaultStatus }}'
WHERE 
region = '{{ region }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mlflow_app"
    values={[
        { label: 'delete_mlflow_app', value: 'delete_mlflow_app' }
    ]}
>
<TabItem value="delete_mlflow_app">

Deletes an MLflow App.

```sql
DELETE FROM aws.sagemaker.mlflow_apps
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_mlflow_apps"
    values={[
        { label: 'list_mlflow_apps', value: 'list_mlflow_apps' }
    ]}
>
<TabItem value="list_mlflow_apps">

Lists all MLflow Apps

```sql
EXEC aws.sagemaker.mlflow_apps.list_mlflow_apps 
@region='{{ region }}' --required 
@@json=
'{
"CreatedAfter": "{{ CreatedAfter }}", 
"CreatedBefore": "{{ CreatedBefore }}", 
"Status": "{{ Status }}", 
"MlflowVersion": "{{ MlflowVersion }}", 
"DefaultForDomainId": "{{ DefaultForDomainId }}", 
"AccountDefaultStatus": "{{ AccountDefaultStatus }}", 
"SortBy": "{{ SortBy }}", 
"SortOrder": "{{ SortOrder }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
