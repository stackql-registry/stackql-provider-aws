--- 
title: configuration_check_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_check_operations
  - ssm_sap
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

Creates, updates, deletes, gets or lists a <code>configuration_check_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_check_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_sap.configuration_check_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_check_operation"
    values={[
        { label: 'get_configuration_check_operation', value: 'get_configuration_check_operation' },
        { label: 'list_configuration_check_operations', value: 'list_configuration_check_operations' }
    ]}
>
<TabItem value="get_configuration_check_operation">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application against which the configuration check was performed. (pattern: &lt;code&gt;&#91;\w\d\.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_check_description" /></td>
    <td><code>string</code></td>
    <td>A description of the configuration check that was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_check_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration check that was performed. (SAP_CHECK_01, SAP_CHECK_02, SAP_CHECK_03)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_check_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration check that was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration check operation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration check operation. (pattern: &lt;code&gt;&#91;&#123;&#93;?&#91;0-9a-fA-F&#93;&#123;8&#125;-(&#91;0-9a-fA-F&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-fA-F&#93;&#123;12&#125;&#91;&#125;&#93;?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_status_counts" /></td>
    <td><code>object</code></td>
    <td>A summary of all the rule results, showing counts for each status type.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration check operation started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the configuration check operation. (INPROGRESS, SUCCESS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message providing additional details about the status of the configuration check operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_check_operations">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application against which the configuration check was performed. (pattern: &lt;code&gt;&#91;\w\d\.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_check_description" /></td>
    <td><code>string</code></td>
    <td>A description of the configuration check that was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_check_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration check that was performed. (SAP_CHECK_01, SAP_CHECK_02, SAP_CHECK_03)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_check_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration check that was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration check operation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the configuration check operation. (pattern: &lt;code&gt;&#91;&#123;&#93;?&#91;0-9a-fA-F&#93;&#123;8&#125;-(&#91;0-9a-fA-F&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-fA-F&#93;&#123;12&#125;&#91;&#125;&#93;?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_status_counts" /></td>
    <td><code>object</code></td>
    <td>A summary of all the rule results, showing counts for each status type.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration check operation started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the configuration check operation. (INPROGRESS, SUCCESS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message providing additional details about the status of the configuration check operation.</td>
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
    <td><a href="#get_configuration_check_operation"><CopyableCode code="get_configuration_check_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a configuration check operation by specifying the operation ID.</td>
</tr>
<tr>
    <td><a href="#list_configuration_check_operations"><CopyableCode code="list_configuration_check_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the configuration check operations performed by AWS Systems Manager for SAP.</td>
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
    defaultValue="get_configuration_check_operation"
    values={[
        { label: 'get_configuration_check_operation', value: 'get_configuration_check_operation' },
        { label: 'list_configuration_check_operations', value: 'list_configuration_check_operations' }
    ]}
>
<TabItem value="get_configuration_check_operation">

Gets the details of a configuration check operation by specifying the operation ID.

```sql
SELECT
application_id,
configuration_check_description,
configuration_check_id,
configuration_check_name,
end_time,
id,
rule_status_counts,
start_time,
status,
status_message
FROM aws.ssm_sap.configuration_check_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_check_operations">

Lists the configuration check operations performed by AWS Systems Manager for SAP.

```sql
SELECT
application_id,
configuration_check_description,
configuration_check_id,
configuration_check_name,
end_time,
id,
rule_status_counts,
start_time,
status,
status_message
FROM aws.ssm_sap.configuration_check_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
