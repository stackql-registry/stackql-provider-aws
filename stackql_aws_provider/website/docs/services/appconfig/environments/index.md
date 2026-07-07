--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - appconfig
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The environment ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Monitors" /></td>
    <td><code>array</code></td>
    <td>Amazon CloudWatch alarms monitored during the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the environment. An environment can be in one of the following states: READY_FOR_DEPLOYMENT, DEPLOYING, ROLLING_BACK, or ROLLED_BACK (READY_FOR_DEPLOYMENT, DEPLOYING, ROLLING_BACK, ROLLED_BACK, REVERTED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The application ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The environment ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Monitors" /></td>
    <td><code>array</code></td>
    <td>Amazon CloudWatch alarms monitored during the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the environment. An environment can be in one of the following states: READY_FOR_DEPLOYMENT, DEPLOYING, ROLLING_BACK, or ROLLED_BACK (READY_FOR_DEPLOYMENT, DEPLOYING, ROLLING_BACK, ROLLED_BACK, REVERTED)</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an environment. An environment is a deployment group of AppConfig applications, such as applications in a Production environment or in an EU_Region environment. Each configuration deployment targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is triggered during a deployment, AppConfig roles back the configuration.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists the environments for an application.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an environment. For each application, you define one or more environments. An environment is a deployment group of AppConfig targets, such as applications in a Beta or Production environment. You can also define environments for application subcomponents such as the Web, Mobile and Back-end components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an environment.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amzn-deletion-protection-check"><code>x-amzn-deletion-protection-check</code></a></td>
    <td>Deletes an environment. To prevent users from unintentionally deleting actively-used environments, enable deletion protection.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application ID that includes the environment that you want to delete.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list. Use this token to get the next set of results.</td>
</tr>
<tr id="parameter-x-amzn-deletion-protection-check">
    <td><CopyableCode code="x-amzn-deletion-protection-check" /></td>
    <td><code>string</code></td>
    <td>A parameter to configure deletion protection. Deletion protection prevents a user from deleting an environment if your application called either GetLatestConfiguration or in the environment during the specified interval. This parameter supports the following values: BYPASS: Instructs AppConfig to bypass the deletion protection check and delete a configuration profile even if deletion protection would have otherwise prevented it. APPLY: Instructs the deletion protection check to run, even if deletion protection is disabled at the account level. APPLY also forces the deletion protection check to run against resources created in the past hour, which are normally excluded from deletion protection checks. ACCOUNT_DEFAULT: The default setting, which instructs AppConfig to implement the deletion protection value specified in the UpdateAccountSettings API.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

Retrieves information about an environment. An environment is a deployment group of AppConfig applications, such as applications in a Production environment or in an EU_Region environment. Each configuration deployment targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is triggered during a deployment, AppConfig roles back the configuration.

```sql
SELECT
ApplicationId,
Description,
Id,
Monitors,
Name,
State
FROM aws.appconfig.environments
WHERE application_id = '{{ application_id }}' -- required
AND environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Lists the environments for an application.

```sql
SELECT
ApplicationId,
Description,
Id,
Monitors,
Name,
State
FROM aws.appconfig.environments
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Creates an environment. For each application, you define one or more environments. An environment is a deployment group of AppConfig targets, such as applications in a Beta or Production environment. You can also define environments for application subcomponents such as the Web, Mobile and Back-end components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.

```sql
INSERT INTO aws.appconfig.environments (
Name,
Description,
Monitors,
Tags,
application_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Monitors }}',
'{{ Tags }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
ApplicationId,
Description,
Id,
Monitors,
Name,
State
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the environments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Monitors
      value:
        - AlarmArn: "{{ AlarmArn }}"
          AlarmRoleArn: "{{ AlarmRoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment"
    values={[
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="update_environment">

Updates an environment.

```sql
UPDATE aws.appconfig.environments
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Monitors = '{{ Monitors }}'
WHERE 
application_id = '{{ application_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ApplicationId,
Description,
Id,
Monitors,
Name,
State;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment"
    values={[
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_environment">

Deletes an environment. To prevent users from unintentionally deleting actively-used environments, enable deletion protection.

```sql
DELETE FROM aws.appconfig.environments
WHERE environment_id = '{{ environment_id }}' --required
AND application_id = '{{ application_id }}' --required
AND region = '{{ region }}' --required
AND `x-amzn-deletion-protection-check` = '{{ x-amzn-deletion-protection-check }}'
;
```
</TabItem>
</Tabs>
