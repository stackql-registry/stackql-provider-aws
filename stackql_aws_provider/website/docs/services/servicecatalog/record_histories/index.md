--- 
title: record_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - record_histories
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>record_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="record_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.record_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_record_history"
    values={[
        { label: 'list_record_history', value: 'list_record_history' }
    ]}
>
<TabItem value="list_record_history">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC time stamp of the creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the launch role associated with the provisioned product. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:iam::&#91;a-z0-9-\.&#93;&#123;0,63&#125;:role\/.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="path_id" /></td>
    <td><code>string</code></td>
    <td>The path identifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>The product identifier. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_product_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the provisioned product. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_product_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the provisioned product. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9._-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_product_type" /></td>
    <td><code>string</code></td>
    <td>The type of provisioned product. The supported values are CFN_STACK, CFN_STACKSET, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, and EXTERNAL.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_artifact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the provisioning artifact. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_errors" /></td>
    <td><code>array</code></td>
    <td>The errors that occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the record. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_tags" /></td>
    <td><code>array</code></td>
    <td>One or more tags.</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>The record type. PROVISION_PRODUCT UPDATE_PROVISIONED_PRODUCT TERMINATE_PROVISIONED_PRODUCT</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the provisioned product. CREATED - The request was created but the operation has not started. IN_PROGRESS - The requested operation is in progress. IN_PROGRESS_IN_ERROR - The provisioned product is under change but the requested operation failed and some remediation is occurring. For example, a rollback. SUCCEEDED - The requested operation has successfully completed. FAILED - The requested operation has unsuccessfully completed. Investigate using the error messages returned. (CREATED, IN_PROGRESS, IN_PROGRESS_IN_ERROR, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the record was last updated.</td>
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
    <td><a href="#list_record_history"><CopyableCode code="list_record_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the specified requests or all performed requests.</td>
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
    defaultValue="list_record_history"
    values={[
        { label: 'list_record_history', value: 'list_record_history' }
    ]}
>
<TabItem value="list_record_history">

Lists the specified requests or all performed requests.

```sql
SELECT
created_time,
launch_role_arn,
path_id,
product_id,
provisioned_product_id,
provisioned_product_name,
provisioned_product_type,
provisioning_artifact_id,
record_errors,
record_id,
record_tags,
record_type,
status,
updated_time
FROM aws.servicecatalog.record_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
