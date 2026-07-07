--- 
title: partner_apps
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_apps
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

Creates, updates, deletes, gets or lists a <code>partner_apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partner_apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.partner_apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_partner_app"
    values={[
        { label: 'describe_partner_app', value: 'describe_partner_app' }
    ]}
>
<TabItem value="describe_partner_app">

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
    <td><CopyableCode code="ApplicationConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for the SageMaker Partner AI App.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SageMaker Partner AI App that was described. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:partner-app\/app-&#91;A-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AuthType" /></td>
    <td><code>string</code></td>
    <td>The authorization type that users use to access the SageMaker Partner AI App. (IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableUpgrade" /></td>
    <td><code>object</code></td>
    <td>A map of available minor version upgrades for the SageMaker Partner AI App. The key is the semantic version number, and the value is a list of release notes for that version. A null value indicates no upgrades are available.</td>
</tr>
<tr>
    <td><CopyableCode code="BaseUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the SageMaker Partner AI App that the Application SDK uses to support in-app calls for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the SageMaker Partner AI App was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentVersionEolDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end-of-life date for the current version of the SageMaker Partner AI App.</td>
</tr>
<tr>
    <td><CopyableCode code="EnableAutoMinorVersionUpgrade" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the SageMaker Partner AI App is configured for automatic minor version upgrades during scheduled maintenance windows.</td>
</tr>
<tr>
    <td><CopyableCode code="EnableIamSessionBasedIdentity" /></td>
    <td><code>boolean</code></td>
    <td>When set to TRUE, the SageMaker Partner AI App sets the Amazon Web Services IAM session name or the authenticated IAM user as the identity of the SageMaker Partner AI App user.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>object</code></td>
    <td>This is an error field object that contains the error code and the reason for an operation failure.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role associated with the SageMaker Partner AI App. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS customer managed key used to encrypt the data at rest associated with SageMaker Partner AI Apps. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the SageMaker Partner AI App was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MaintenanceConfig" /></td>
    <td><code>object</code></td>
    <td>Maintenance configuration settings for the SageMaker Partner AI App.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the SageMaker Partner AI App. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the SageMaker Partner AI App. Creating: SageMaker AI is creating the partner AI app. The partner AI app is not available during creation. Updating: SageMaker AI is updating the partner AI app. The partner AI app is not available when updating. Deleting: SageMaker AI is deleting the partner AI app. The partner AI app is not available during deletion. Available: The partner AI app is provisioned and accessible. Failed: The partner AI app is in a failed state and isn't available. SageMaker AI is investigating the issue. For further guidance, contact Amazon Web Services Support. UpdateFailed: The partner AI app couldn't be updated but is available. Deleted: The partner AI app is permanently deleted and not available. (Creating, Updating, Deleting, Available, Failed, UpdateFailed, Deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="Tier" /></td>
    <td><code>string</code></td>
    <td>The instance type and size of the cluster attached to the SageMaker Partner AI App. (pattern: &lt;code&gt;(?!\s*$).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of SageMaker Partner AI App. Must be one of the following: lakera-guard, comet, deepchecks-llm-evaluation, or fiddler. (lakera-guard, comet, deepchecks-llm-evaluation, fiddler)</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The version of the SageMaker Partner AI App. (pattern: &lt;code&gt;(?!\s*$).+&lt;/code&gt;)</td>
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
    <td><a href="#describe_partner_app"><CopyableCode code="describe_partner_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a SageMaker Partner AI App.</td>
</tr>
<tr>
    <td><a href="#create_partner_app"><CopyableCode code="create_partner_app" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-AuthType"><code>AuthType</code></a></td>
    <td></td>
    <td>Creates an Amazon SageMaker Partner AI App.</td>
</tr>
<tr>
    <td><a href="#create_partner_app_presigned_url"><CopyableCode code="create_partner_app_presigned_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a presigned URL to access an Amazon SageMaker Partner AI App.</td>
</tr>
<tr>
    <td><a href="#update_partner_app"><CopyableCode code="update_partner_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates all of the SageMaker Partner AI Apps in an account.</td>
</tr>
<tr>
    <td><a href="#delete_partner_app"><CopyableCode code="delete_partner_app" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a SageMaker Partner AI App.</td>
</tr>
<tr>
    <td><a href="#list_partner_apps"><CopyableCode code="list_partner_apps" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the SageMaker Partner AI Apps in an account.</td>
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
    defaultValue="describe_partner_app"
    values={[
        { label: 'describe_partner_app', value: 'describe_partner_app' }
    ]}
>
<TabItem value="describe_partner_app">

Gets information about a SageMaker Partner AI App.

```sql
SELECT
ApplicationConfig,
Arn,
AuthType,
AvailableUpgrade,
BaseUrl,
CreationTime,
CurrentVersionEolDate,
EnableAutoMinorVersionUpgrade,
EnableIamSessionBasedIdentity,
Error,
ExecutionRoleArn,
KmsKeyId,
LastModifiedTime,
MaintenanceConfig,
Name,
Status,
Tier,
Type,
Version
FROM aws.sagemaker.partner_apps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partner_app"
    values={[
        { label: 'create_partner_app', value: 'create_partner_app' },
        { label: 'create_partner_app_presigned_url', value: 'create_partner_app_presigned_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partner_app">

Creates an Amazon SageMaker Partner AI App.

```sql
INSERT INTO aws.sagemaker.partner_apps (
Name,
Type,
ExecutionRoleArn,
KmsKeyId,
MaintenanceConfig,
Tier,
ApplicationConfig,
AuthType,
EnableIamSessionBasedIdentity,
EnableAutoMinorVersionUpgrade,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Type }}',
'{{ ExecutionRoleArn }}' /* required */,
'{{ KmsKeyId }}',
'{{ MaintenanceConfig }}',
'{{ Tier }}',
'{{ ApplicationConfig }}',
'{{ AuthType }}' /* required */,
{{ EnableIamSessionBasedIdentity }},
{{ EnableAutoMinorVersionUpgrade }},
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn
;
```
</TabItem>
<TabItem value="create_partner_app_presigned_url">

Creates a presigned URL to access an Amazon SageMaker Partner AI App.

```sql
INSERT INTO aws.sagemaker.partner_apps (
Arn,
ExpiresInSeconds,
SessionExpirationDurationInSeconds,
region
)
SELECT 
'{{ Arn }}',
{{ ExpiresInSeconds }},
{{ SessionExpirationDurationInSeconds }},
'{{ region }}'
RETURNING
Url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partner_apps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the partner_apps resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name to give the SageMaker Partner AI App.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of SageMaker Partner AI App to create. Must be one of the following: lakera-guard, comet, deepchecks-llm-evaluation, or fiddler.
      valid_values: ['lakera-guard', 'comet', 'deepchecks-llm-evaluation', 'fiddler']
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
      description: |
        The ARN of the IAM role that the partner application uses.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        SageMaker Partner AI Apps uses Amazon Web Services KMS to encrypt data at rest using an Amazon Web Services managed key by default. For more control, specify a customer managed key.
    - name: MaintenanceConfig
      description: |
        Maintenance configuration settings for the SageMaker Partner AI App.
      value:
        MaintenanceWindowStart: "{{ MaintenanceWindowStart }}"
    - name: Tier
      value: "{{ Tier }}"
      description: |
        Indicates the instance type and size of the cluster attached to the SageMaker Partner AI App.
    - name: ApplicationConfig
      description: |
        Configuration settings for the SageMaker Partner AI App.
      value:
        AdminUsers:
          - "{{ AdminUsers }}"
        Arguments: "{{ Arguments }}"
        AssignedGroupPatterns:
          - "{{ AssignedGroupPatterns }}"
        RoleGroupAssignments:
          - RoleName: "{{ RoleName }}"
            GroupPatterns: "{{ GroupPatterns }}"
    - name: AuthType
      value: "{{ AuthType }}"
      description: |
        The authorization type that users use to access the SageMaker Partner AI App.
      valid_values: ['IAM']
    - name: EnableIamSessionBasedIdentity
      value: {{ EnableIamSessionBasedIdentity }}
      description: |
        When set to TRUE, the SageMaker Partner AI App sets the Amazon Web Services IAM session name or the authenticated IAM user as the identity of the SageMaker Partner AI App user.
    - name: EnableAutoMinorVersionUpgrade
      value: {{ EnableAutoMinorVersionUpgrade }}
      description: |
        When set to TRUE, the SageMaker Partner AI App is automatically upgraded to the latest minor version during the next scheduled maintenance window, if one is available. Default is FALSE.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that guarantees that the call to this API is idempotent.
    - name: Tags
      description: |
        Each tag consists of a key and an optional value. Tag keys must be unique per resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Arn
      value: "{{ Arn }}"
      description: |
        The ARN of the SageMaker Partner AI App to create the presigned URL for.
    - name: ExpiresInSeconds
      value: {{ ExpiresInSeconds }}
      description: |
        The time that will pass before the presigned URL expires.
    - name: SessionExpirationDurationInSeconds
      value: {{ SessionExpirationDurationInSeconds }}
      description: |
        Indicates how long the Amazon SageMaker Partner AI App session can be accessed for after logging in.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_partner_app"
    values={[
        { label: 'update_partner_app', value: 'update_partner_app' }
    ]}
>
<TabItem value="update_partner_app">

Updates all of the SageMaker Partner AI Apps in an account.

```sql
UPDATE aws.sagemaker.partner_apps
SET 
Arn = '{{ Arn }}',
MaintenanceConfig = '{{ MaintenanceConfig }}',
Tier = '{{ Tier }}',
ApplicationConfig = '{{ ApplicationConfig }}',
EnableIamSessionBasedIdentity = {{ EnableIamSessionBasedIdentity }},
EnableAutoMinorVersionUpgrade = {{ EnableAutoMinorVersionUpgrade }},
AppVersion = '{{ AppVersion }}',
ClientToken = '{{ ClientToken }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_partner_app"
    values={[
        { label: 'delete_partner_app', value: 'delete_partner_app' }
    ]}
>
<TabItem value="delete_partner_app">

Deletes a SageMaker Partner AI App.

```sql
DELETE FROM aws.sagemaker.partner_apps
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_partner_apps"
    values={[
        { label: 'list_partner_apps', value: 'list_partner_apps' }
    ]}
>
<TabItem value="list_partner_apps">

Lists all of the SageMaker Partner AI Apps in an account.

```sql
EXEC aws.sagemaker.partner_apps.list_partner_apps 
@region='{{ region }}' --required 
@@json=
'{
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
