--- 
title: domain_change_progress
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_change_progress
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>domain_change_progress</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_change_progress" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.domain_change_progress" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain_change_progress"
    values={[
        { label: 'describe_domain_change_progress', value: 'describe_domain_change_progress' }
    ]}
>
<TabItem value="describe_domain_change_progress">

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
    <td><CopyableCode code="ChangeId" /></td>
    <td><code>string</code></td>
    <td>The unique change identifier associated with a specific domain configuration change. (pattern: &lt;code&gt;\p&#123;XDigit&#125;&#123;8&#125;-\p&#123;XDigit&#125;&#123;4&#125;-\p&#123;XDigit&#125;&#123;4&#125;-\p&#123;XDigit&#125;&#123;4&#125;-\p&#123;XDigit&#125;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChangeProgressStages" /></td>
    <td><code>array</code></td>
    <td>The specific stages that the domain is going through to perform the configuration change.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedProperties" /></td>
    <td><code>array</code></td>
    <td>The list of properties in the domain configuration change that have completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigChangeStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the configuration change. (Pending, Initializing, Validating, ValidationFailed, ApplyingChanges, Completed, PendingUserInput, Cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="InitiatedBy" /></td>
    <td><code>string</code></td>
    <td>The IAM principal who initiated the configuration change. (CUSTOMER, SERVICE)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that the status of the configuration change was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="PendingProperties" /></td>
    <td><code>array</code></td>
    <td>The list of properties in the domain configuration change that are still pending.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration change is made on the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the domain configuration change. (PENDING, PROCESSING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalNumberOfStages" /></td>
    <td><code>integer</code></td>
    <td>The total number of stages required for the configuration change.</td>
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
    <td><a href="#describe_domain_change_progress"><CopyableCode code="describe_domain_change_progress" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-changeid"><code>changeid</code></a></td>
    <td>Returns information about the current blue/green deployment happening on an Amazon OpenSearch Service domain. For more information, see Making configuration changes in Amazon OpenSearch Service.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain to get progress information for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-changeid">
    <td><CopyableCode code="changeid" /></td>
    <td><code>string</code></td>
    <td>The specific change ID for which you want to get progress information. If omitted, the request returns information about the most recent configuration change.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_domain_change_progress"
    values={[
        { label: 'describe_domain_change_progress', value: 'describe_domain_change_progress' }
    ]}
>
<TabItem value="describe_domain_change_progress">

Returns information about the current blue/green deployment happening on an Amazon OpenSearch Service domain. For more information, see Making configuration changes in Amazon OpenSearch Service.

```sql
SELECT
ChangeId,
ChangeProgressStages,
CompletedProperties,
ConfigChangeStatus,
InitiatedBy,
LastUpdatedTime,
PendingProperties,
StartTime,
Status,
TotalNumberOfStages
FROM aws.opensearch.domain_change_progress
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND changeid = '{{ changeid }}'
;
```
</TabItem>
</Tabs>
