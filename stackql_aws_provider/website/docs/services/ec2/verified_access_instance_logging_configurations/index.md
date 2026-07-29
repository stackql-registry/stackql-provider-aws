--- 
title: verified_access_instance_logging_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_access_instance_logging_configurations
  - ec2
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

Creates, updates, deletes, gets or lists a <code>verified_access_instance_logging_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_access_instance_logging_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.verified_access_instance_logging_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_verified_access_instance_logging_configurations"
    values={[
        { label: 'describe_verified_access_instance_logging_configurations', value: 'describe_verified_access_instance_logging_configurations' }
    ]}
>
<TabItem value="describe_verified_access_instance_logging_configurations">

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
    <td><CopyableCode code="access_logs" /></td>
    <td><code>string</code></td>
    <td>Details about the logging options.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_access_instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Verified Access instance.</td>
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
    <td><a href="#describe_verified_access_instance_logging_configurations"><CopyableCode code="describe_verified_access_instance_logging_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified Amazon Web Services Verified Access instances.</td>
</tr>
<tr>
    <td><a href="#modify_verified_access_instance_logging_configuration"><CopyableCode code="modify_verified_access_instance_logging_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VerifiedAccessInstanceId"><code>VerifiedAccessInstanceId</code></a>, <a href="#parameter-AccessLogs"><code>AccessLogs</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Modifies the logging configuration for the specified Amazon Web Services Verified Access instance.</td>
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
<tr id="parameter-AccessLogs">
    <td><CopyableCode code="AccessLogs" /></td>
    <td><code>object</code></td>
    <td>The configuration options for Verified Access instances.</td>
</tr>
<tr id="parameter-VerifiedAccessInstanceId">
    <td><CopyableCode code="VerifiedAccessInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Verified Access instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive token that you provide to ensure idempotency of your modification request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-VerifiedAccessInstanceId">
    <td><CopyableCode code="VerifiedAccessInstanceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Verified Access instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_verified_access_instance_logging_configurations"
    values={[
        { label: 'describe_verified_access_instance_logging_configurations', value: 'describe_verified_access_instance_logging_configurations' }
    ]}
>
<TabItem value="describe_verified_access_instance_logging_configurations">

Describes the specified Amazon Web Services Verified Access instances.

```sql
SELECT
access_logs,
verified_access_instance_id
FROM aws.ec2.verified_access_instance_logging_configurations
WHERE region = '{{ region }}' -- required
AND VerifiedAccessInstanceId = '{{ VerifiedAccessInstanceId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_verified_access_instance_logging_configuration"
    values={[
        { label: 'modify_verified_access_instance_logging_configuration', value: 'modify_verified_access_instance_logging_configuration' }
    ]}
>
<TabItem value="modify_verified_access_instance_logging_configuration">

Modifies the logging configuration for the specified Amazon Web Services Verified Access instance.

```sql
UPDATE aws.ec2.verified_access_instance_logging_configurations
SET 
-- No updatable properties
WHERE 
VerifiedAccessInstanceId = '{{ VerifiedAccessInstanceId }}' --required
AND AccessLogs = '{{ AccessLogs }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND ClientToken = '{{ ClientToken}}'
RETURNING
access_logs,
verified_access_instance_id;
```
</TabItem>
</Tabs>
