--- 
title: mlflow_tracking_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - mlflow_tracking_servers
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

Creates, updates, deletes, gets or lists a <code>mlflow_tracking_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mlflow_tracking_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.mlflow_tracking_servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mlflow_tracking_server"
    values={[
        { label: 'describe_mlflow_tracking_server', value: 'describe_mlflow_tracking_server' },
        { label: 'list_mlflow_tracking_servers', value: 'list_mlflow_tracking_servers' }
    ]}
>
<TabItem value="describe_mlflow_tracking_server">

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
    <td><CopyableCode code="artifact_store_uri" /></td>
    <td><code>string</code></td>
    <td>The S3 URI of the general purpose bucket used as the MLflow Tracking Server artifact store. (pattern: &lt;code&gt;(https|s3):​//(&#91;^/&#93;+)/?(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_model_registration" /></td>
    <td><code>boolean</code></td>
    <td>Whether automatic registration of new MLflow models to the SageMaker Model Registry is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the described MLflow Tracking Server was created.</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>string</code></td>
    <td>Whether the described MLflow Tracking Server is currently active. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the described MLflow Tracking Server was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="mlflow_version" /></td>
    <td><code>string</code></td>
    <td>The MLflow version used for the described tracking server. (pattern: &lt;code&gt;&#91;0-9&#93;*.&#91;0-9&#93;*.&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for an IAM role in your account that the described MLflow Tracking Server uses to access the artifact store in Amazon S3. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket_owner_account_id" /></td>
    <td><code>string</code></td>
    <td>Expected Amazon Web Services account ID that owns the Amazon S3 bucket for artifact storage. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket_owner_verification" /></td>
    <td><code>boolean</code></td>
    <td>Whether Amazon S3 Bucket Ownership checks are enabled whenever the tracking server interacts with Amazon Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the described tracking server. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:mlflow-tracking-server/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_maintenance_status" /></td>
    <td><code>string</code></td>
    <td>The current maintenance status of the described MLflow Tracking Server. (MaintenanceInProgress, MaintenanceComplete, MaintenanceFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_name" /></td>
    <td><code>string</code></td>
    <td>The name of the described tracking server. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_size" /></td>
    <td><code>string</code></td>
    <td>The size of the described tracking server. (Small, Medium, Large)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_status" /></td>
    <td><code>string</code></td>
    <td>The current creation status of the described MLflow Tracking Server. (Creating, Created, CreateFailed, Updating, Updated, UpdateFailed, Deleting, DeleteFailed, Stopping, Stopped, StopFailed, Starting, Started, StartFailed, MaintenanceInProgress, MaintenanceComplete, MaintenanceFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_url" /></td>
    <td><code>string</code></td>
    <td>The URL to connect to the MLflow user interface for the described tracking server.</td>
</tr>
<tr>
    <td><CopyableCode code="weekly_maintenance_window_start" /></td>
    <td><code>string</code></td>
    <td>The day and time of the week when weekly maintenance occurs on the described tracking server. (pattern: &lt;code&gt;(Mon|Tue|Wed|Thu|Fri|Sat|Sun):(&#91;01&#93;\d|2&#91;0-3&#93;):(&#91;0-5&#93;\d)&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mlflow_tracking_servers">

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
    <td>The creation time of a listed tracking server.</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>string</code></td>
    <td>The activity status of a listed tracking server. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of a listed tracking server.</td>
</tr>
<tr>
    <td><CopyableCode code="mlflow_version" /></td>
    <td><code>string</code></td>
    <td>The MLflow version used for a listed tracking server. (pattern: &lt;code&gt;&#91;0-9&#93;*.&#91;0-9&#93;*.&#91;0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a listed tracking server. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:mlflow-tracking-server/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_name" /></td>
    <td><code>string</code></td>
    <td>The name of a listed tracking server. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_server_status" /></td>
    <td><code>string</code></td>
    <td>The creation status of a listed tracking server. (Creating, Created, CreateFailed, Updating, Updated, UpdateFailed, Deleting, DeleteFailed, Stopping, Stopped, StopFailed, Starting, Started, StartFailed, MaintenanceInProgress, MaintenanceComplete, MaintenanceFailed)</td>
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
    <td><a href="#describe_mlflow_tracking_server"><CopyableCode code="describe_mlflow_tracking_server" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an MLflow Tracking Server.</td>
</tr>
<tr>
    <td><a href="#list_mlflow_tracking_servers"><CopyableCode code="list_mlflow_tracking_servers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all MLflow Tracking Servers.</td>
</tr>
<tr>
    <td><a href="#create_mlflow_tracking_server"><CopyableCode code="create_mlflow_tracking_server" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrackingServerName"><code>TrackingServerName</code></a>, <a href="#parameter-ArtifactStoreUri"><code>ArtifactStoreUri</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store. For more information, see Create an MLflow Tracking Server.</td>
</tr>
<tr>
    <td><a href="#update_mlflow_tracking_server"><CopyableCode code="update_mlflow_tracking_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrackingServerName"><code>TrackingServerName</code></a></td>
    <td></td>
    <td>Updates properties of an existing MLflow Tracking Server.</td>
</tr>
<tr>
    <td><a href="#delete_mlflow_tracking_server"><CopyableCode code="delete_mlflow_tracking_server" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an MLflow Tracking Server. For more information, see Clean up MLflow resources.</td>
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
    defaultValue="describe_mlflow_tracking_server"
    values={[
        { label: 'describe_mlflow_tracking_server', value: 'describe_mlflow_tracking_server' },
        { label: 'list_mlflow_tracking_servers', value: 'list_mlflow_tracking_servers' }
    ]}
>
<TabItem value="describe_mlflow_tracking_server">

Returns information about an MLflow Tracking Server.

```sql
SELECT
artifact_store_uri,
automatic_model_registration,
created_by,
creation_time,
is_active,
last_modified_by,
last_modified_time,
mlflow_version,
role_arn,
s3_bucket_owner_account_id,
s3_bucket_owner_verification,
tracking_server_arn,
tracking_server_maintenance_status,
tracking_server_name,
tracking_server_size,
tracking_server_status,
tracking_server_url,
weekly_maintenance_window_start
FROM aws.sagemaker.mlflow_tracking_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mlflow_tracking_servers">

Lists all MLflow Tracking Servers.

```sql
SELECT
creation_time,
is_active,
last_modified_time,
mlflow_version,
tracking_server_arn,
tracking_server_name,
tracking_server_status
FROM aws.sagemaker.mlflow_tracking_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mlflow_tracking_server"
    values={[
        { label: 'create_mlflow_tracking_server', value: 'create_mlflow_tracking_server' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mlflow_tracking_server">

Creates an MLflow Tracking Server using a general purpose Amazon S3 bucket as the artifact store. For more information, see Create an MLflow Tracking Server.

```sql
INSERT INTO aws.sagemaker.mlflow_tracking_servers (
TrackingServerName,
ArtifactStoreUri,
TrackingServerSize,
MlflowVersion,
RoleArn,
AutomaticModelRegistration,
WeeklyMaintenanceWindowStart,
Tags,
S3BucketOwnerAccountId,
S3BucketOwnerVerification,
region
)
SELECT 
'{{ TrackingServerName }}' /* required */,
'{{ ArtifactStoreUri }}' /* required */,
'{{ TrackingServerSize }}',
'{{ MlflowVersion }}',
'{{ RoleArn }}' /* required */,
{{ AutomaticModelRegistration }},
'{{ WeeklyMaintenanceWindowStart }}',
'{{ Tags }}',
'{{ S3BucketOwnerAccountId }}',
{{ S3BucketOwnerVerification }},
'{{ region }}'
RETURNING
tracking_server_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mlflow_tracking_servers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mlflow_tracking_servers resource.
    - name: TrackingServerName
      value: "{{ TrackingServerName }}"
      description: |
        A unique string identifying the tracking server name. This string is part of the tracking server ARN.
    - name: ArtifactStoreUri
      value: "{{ ArtifactStoreUri }}"
      description: |
        The S3 URI for a general purpose bucket to use as the MLflow Tracking Server artifact store.
    - name: TrackingServerSize
      value: "{{ TrackingServerSize }}"
      description: |
        The size of the tracking server you want to create. You can choose between "Small", "Medium", and "Large". The default MLflow Tracking Server configuration size is "Small". You can choose a size depending on the projected use of the tracking server such as the volume of data logged, number of users, and frequency of use. We recommend using a small tracking server for teams of up to 25 users, a medium tracking server for teams of up to 50 users, and a large tracking server for teams of up to 100 users.
      valid_values: ['Small', 'Medium', 'Large']
    - name: MlflowVersion
      value: "{{ MlflowVersion }}"
      description: |
        The version of MLflow that the tracking server uses. To see which MLflow versions are available to use, see How it works.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The Amazon Resource Name (ARN) for an IAM role in your account that the MLflow Tracking Server uses to access the artifact store in Amazon S3. The role should have AmazonS3FullAccess permissions. For more information on IAM permissions for tracking server creation, see Set up IAM permissions for MLflow.
    - name: AutomaticModelRegistration
      value: {{ AutomaticModelRegistration }}
      description: |
        Whether to enable or disable automatic registration of new MLflow models to the SageMaker Model Registry. To enable automatic model registration, set this value to True. To disable automatic model registration, set this value to False. If not specified, AutomaticModelRegistration defaults to False.
    - name: WeeklyMaintenanceWindowStart
      value: "{{ WeeklyMaintenanceWindowStart }}"
      description: |
        The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: TUE:03:30.
    - name: Tags
      description: |
        Tags consisting of key-value pairs used to manage metadata for the tracking server.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: S3BucketOwnerAccountId
      value: "{{ S3BucketOwnerAccountId }}"
      description: |
        Expected Amazon Web Services account ID that owns the Amazon S3 bucket for artifact storage. Defaults to caller's account ID if not provided.
    - name: S3BucketOwnerVerification
      value: {{ S3BucketOwnerVerification }}
      description: |
        Enable Amazon S3 Ownership checks when interacting with Amazon S3 buckets from a SageMaker Managed MLflow Tracking Server. Defaults to True if not provided.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mlflow_tracking_server"
    values={[
        { label: 'update_mlflow_tracking_server', value: 'update_mlflow_tracking_server' }
    ]}
>
<TabItem value="update_mlflow_tracking_server">

Updates properties of an existing MLflow Tracking Server.

```sql
UPDATE aws.sagemaker.mlflow_tracking_servers
SET 
TrackingServerName = '{{ TrackingServerName }}',
ArtifactStoreUri = '{{ ArtifactStoreUri }}',
TrackingServerSize = '{{ TrackingServerSize }}',
AutomaticModelRegistration = {{ AutomaticModelRegistration }},
WeeklyMaintenanceWindowStart = '{{ WeeklyMaintenanceWindowStart }}',
S3BucketOwnerAccountId = '{{ S3BucketOwnerAccountId }}',
S3BucketOwnerVerification = {{ S3BucketOwnerVerification }}
WHERE 
region = '{{ region }}' --required
AND TrackingServerName = '{{ TrackingServerName }}' --required
RETURNING
tracking_server_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mlflow_tracking_server"
    values={[
        { label: 'delete_mlflow_tracking_server', value: 'delete_mlflow_tracking_server' }
    ]}
>
<TabItem value="delete_mlflow_tracking_server">

Deletes an MLflow Tracking Server. For more information, see Clean up MLflow resources.

```sql
DELETE FROM aws.sagemaker.mlflow_tracking_servers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
