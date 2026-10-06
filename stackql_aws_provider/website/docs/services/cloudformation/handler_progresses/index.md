--- 
title: handler_progresses
hide_title: false
hide_table_of_contents: false
keywords:
  - handler_progresses
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>handler_progresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="handler_progresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.handler_progresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#record_handler_progress"><CopyableCode code="record_handler_progress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-BearerToken"><code>BearerToken</code></a>, <a href="#parameter-OperationStatus"><code>OperationStatus</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CurrentOperationStatus"><code>CurrentOperationStatus</code></a>, <a href="#parameter-StatusMessage"><code>StatusMessage</code></a>, <a href="#parameter-ErrorCode"><code>ErrorCode</code></a>, <a href="#parameter-ResourceModel"><code>ResourceModel</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td>Reports progress of a resource handler to CloudFormation. Reserved for use by the CloudFormation CLI. Don't use this API in your code.</td>
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
<tr id="parameter-BearerToken">
    <td><CopyableCode code="BearerToken" /></td>
    <td><code>string</code></td>
    <td>Reserved for use by the CloudFormation CLI.</td>
</tr>
<tr id="parameter-OperationStatus">
    <td><CopyableCode code="OperationStatus" /></td>
    <td><code>string</code></td>
    <td>Reserved for use by the CloudFormation CLI.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td>Reserved for use by the CloudFormation CLI.</td>
</tr>
<tr id="parameter-CurrentOperationStatus">
    <td><CopyableCode code="CurrentOperationStatus" /></td>
    <td><code>string</code></td>
    <td>Reserved for use by the CloudFormation CLI.</td>
</tr>
<tr id="parameter-ErrorCode">
    <td><CopyableCode code="ErrorCode" /></td>
    <td><code>string</code></td>
    <td>Reserved for use by the CloudFormation CLI.</td>
</tr>
<tr id="parameter-ResourceModel">
    <td><CopyableCode code="ResourceModel" /></td>
    <td><code>string</code></td>
    <td>Reserved for use by the CloudFormation CLI.</td>
</tr>
<tr id="parameter-StatusMessage">
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Reserved for use by the CloudFormation CLI.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="record_handler_progress"
    values={[
        { label: 'record_handler_progress', value: 'record_handler_progress' }
    ]}
>
<TabItem value="record_handler_progress">

Reports progress of a resource handler to CloudFormation. Reserved for use by the CloudFormation CLI. Don't use this API in your code.

```sql
EXEC aws.cloudformation.handler_progresses.record_handler_progress 
@BearerToken='{{ BearerToken }}' --required, 
@OperationStatus='{{ OperationStatus }}' --required, 
@region='{{ region }}' --required, 
@CurrentOperationStatus='{{ CurrentOperationStatus }}', 
@StatusMessage='{{ StatusMessage }}', 
@ErrorCode='{{ ErrorCode }}', 
@ResourceModel='{{ ResourceModel }}', 
@ClientRequestToken='{{ ClientRequestToken }}'
;
```
</TabItem>
</Tabs>
