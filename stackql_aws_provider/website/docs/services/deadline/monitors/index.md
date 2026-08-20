--- 
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
  - deadline
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

Creates, updates, deletes, gets or lists a <code>monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of the date and time that the monitor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user name of the person that created the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name used to identify the monitor on the Deadline Cloud console. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_center_application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name that the IAM Identity Center assigned to the monitor when it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_center_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the IAM Identity Center instance responsible for authenticating monitor users. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_center_region" /></td>
    <td><code>string</code></td>
    <td>The Region where IAM Identity Center is enabled. (pattern: &lt;code&gt;&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the monitor. (pattern: &lt;code&gt;monitor-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the IAM role for the monitor. Users of the monitor use this role to access Deadline Cloud resources. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):iam::\d&#123;12&#125;:role(/&#91;!-.0-~&#93;+)*/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subdomain" /></td>
    <td><code>string</code></td>
    <td>The subdomain used for the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com. (pattern: &lt;code&gt;&#91;a-z0-9-&#93;&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of the last date and time that the monitor was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user name of the person that last updated the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The complete URL of the monitor. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitors">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of the date and time that the monitor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user name of the person that created the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor that displays on the Deadline Cloud console. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_center_application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name that the IAM Identity Center assigned to the monitor when it was created.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_center_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the IAM Identity Center instance responsible for authenticating monitor users. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_center_region" /></td>
    <td><code>string</code></td>
    <td>The Region where IAM Identity Center is enabled. (pattern: &lt;code&gt;&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the monitor. (pattern: &lt;code&gt;monitor-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the IAM role for the monitor. Users of the monitor use this role to access Deadline Cloud resources. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):iam::\d&#123;12&#125;:role(/&#91;!-.0-~&#93;+)*/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subdomain" /></td>
    <td><code>string</code></td>
    <td>The subdomain used for the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com. (pattern: &lt;code&gt;&#91;a-z0-9-&#93;&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of the date and time that the monitor was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user name of the person that last updated the monitor.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The complete URL of the monitor. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.</td>
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
    <td><a href="#get_monitor"><CopyableCode code="get_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified monitor.</td>
</tr>
<tr>
    <td><a href="#list_monitors"><CopyableCode code="list_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a list of your monitors in Deadline Cloud.</td>
</tr>
<tr>
    <td><a href="#create_monitor"><CopyableCode code="create_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-identityCenterInstanceArn"><code>identityCenterInstanceArn</code></a>, <a href="#parameter-subdomain"><code>subdomain</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates an Amazon Web Services Deadline Cloud monitor that you can use to view your farms, queues, and fleets. After you submit a job, you can track the progress of the tasks and steps that make up the job, and then download the job's results.</td>
</tr>
<tr>
    <td><a href="#update_monitor"><CopyableCode code="update_monitor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the settings for a Deadline Cloud monitor. You can modify one or all of the settings when you call UpdateMonitor.</td>
</tr>
<tr>
    <td><a href="#delete_monitor"><CopyableCode code="delete_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-monitor_id"><code>monitor_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a Deadline Cloud monitor. After you delete a monitor, you can create a new one and attach farms to the monitor.</td>
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
<tr id="parameter-monitor_id">
    <td><CopyableCode code="monitor_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the monitor to delete. This ID is returned by the CreateMonitor operation, and is included in the response to the GetMonitor operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

Gets information about the specified monitor.

```sql
SELECT
created_at,
created_by,
display_name,
identity_center_application_arn,
identity_center_instance_arn,
identity_center_region,
monitor_id,
role_arn,
subdomain,
updated_at,
updated_by,
url
FROM aws.deadline.monitors
WHERE monitor_id = '{{ monitor_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_monitors">

Gets a list of your monitors in Deadline Cloud.

```sql
SELECT
created_at,
created_by,
display_name,
identity_center_application_arn,
identity_center_instance_arn,
identity_center_region,
monitor_id,
role_arn,
subdomain,
updated_at,
updated_by,
url
FROM aws.deadline.monitors
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor"
    values={[
        { label: 'create_monitor', value: 'create_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor">

Creates an Amazon Web Services Deadline Cloud monitor that you can use to view your farms, queues, and fleets. After you submit a job, you can track the progress of the tasks and steps that make up the job, and then download the job's results.

```sql
INSERT INTO aws.deadline.monitors (
displayName,
identityCenterInstanceArn,
identityCenterRegion,
subdomain,
roleArn,
tags,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ displayName }}' /* required */,
'{{ identityCenterInstanceArn }}' /* required */,
'{{ identityCenterRegion }}',
'{{ subdomain }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ tags }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
identity_center_application_arn,
monitor_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the monitors resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: identityCenterInstanceArn
      value: "{{ identityCenterInstanceArn }}"
    - name: identityCenterRegion
      value: "{{ identityCenterRegion }}"
    - name: subdomain
      value: "{{ subdomain }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitor"
    values={[
        { label: 'update_monitor', value: 'update_monitor' }
    ]}
>
<TabItem value="update_monitor">

Modifies the settings for a Deadline Cloud monitor. You can modify one or all of the settings when you call UpdateMonitor.

```sql
UPDATE aws.deadline.monitors
SET 
subdomain = '{{ subdomain }}',
displayName = '{{ displayName }}',
roleArn = '{{ roleArn }}'
WHERE 
monitor_id = '{{ monitor_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor"
    values={[
        { label: 'delete_monitor', value: 'delete_monitor' }
    ]}
>
<TabItem value="delete_monitor">

Removes a Deadline Cloud monitor. After you delete a monitor, you can create a new one and attach farms to the monitor.

```sql
DELETE FROM aws.deadline.monitors
WHERE monitor_id = '{{ monitor_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
