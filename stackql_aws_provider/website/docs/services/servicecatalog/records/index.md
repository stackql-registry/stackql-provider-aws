--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
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

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_record"
    values={[
        { label: 'describe_record', value: 'describe_record' }
    ]}
>
<TabItem value="describe_record">

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
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>The page token to use to retrieve the next set of results. If there are no additional results, this value is null. (pattern: &lt;code&gt;&#91;\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_detail" /></td>
    <td><code>object</code></td>
    <td>Information about the product.</td>
</tr>
<tr>
    <td><CopyableCode code="record_outputs" /></td>
    <td><code>array</code></td>
    <td>Information about the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.</td>
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
    <td><a href="#describe_record"><CopyableCode code="describe_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified request operation. Use this operation after calling a request operation (for example, ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). If a provisioned product was transferred to a new owner using UpdateProvisionedProductProperties, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use ListRecordHistory to see the product's history from when he was the owner.</td>
</tr>
<tr>
    <td><a href="#notify_provision_product_engine_workflow_result"><CopyableCode code="notify_provision_product_engine_workflow_result" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowToken"><code>WorkflowToken</code></a>, <a href="#parameter-RecordId"><code>RecordId</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Notifies the result of the provisioning engine execution.</td>
</tr>
<tr>
    <td><a href="#notify_terminate_provisioned_product_engine_workflow_result"><CopyableCode code="notify_terminate_provisioned_product_engine_workflow_result" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowToken"><code>WorkflowToken</code></a>, <a href="#parameter-RecordId"><code>RecordId</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Notifies the result of the terminate engine execution.</td>
</tr>
<tr>
    <td><a href="#notify_update_provisioned_product_engine_workflow_result"><CopyableCode code="notify_update_provisioned_product_engine_workflow_result" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkflowToken"><code>WorkflowToken</code></a>, <a href="#parameter-RecordId"><code>RecordId</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Notifies the result of the update engine execution.</td>
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
    defaultValue="describe_record"
    values={[
        { label: 'describe_record', value: 'describe_record' }
    ]}
>
<TabItem value="describe_record">

Gets information about the specified request operation. Use this operation after calling a request operation (for example, ProvisionProduct, TerminateProvisionedProduct, or UpdateProvisionedProduct). If a provisioned product was transferred to a new owner using UpdateProvisionedProductProperties, the new owner will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to use ListRecordHistory to see the product's history from when he was the owner.

```sql
SELECT
next_page_token,
record_detail,
record_outputs
FROM aws.servicecatalog.records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="notify_provision_product_engine_workflow_result"
    values={[
        { label: 'notify_provision_product_engine_workflow_result', value: 'notify_provision_product_engine_workflow_result' },
        { label: 'notify_terminate_provisioned_product_engine_workflow_result', value: 'notify_terminate_provisioned_product_engine_workflow_result' },
        { label: 'notify_update_provisioned_product_engine_workflow_result', value: 'notify_update_provisioned_product_engine_workflow_result' }
    ]}
>
<TabItem value="notify_provision_product_engine_workflow_result">

Notifies the result of the provisioning engine execution.

```sql
EXEC aws.servicecatalog.records.notify_provision_product_engine_workflow_result 
@region='{{ region }}' --required 
@@json=
'{
"WorkflowToken": "{{ WorkflowToken }}", 
"RecordId": "{{ RecordId }}", 
"Status": "{{ Status }}", 
"FailureReason": "{{ FailureReason }}", 
"ResourceIdentifier": "{{ ResourceIdentifier }}", 
"Outputs": "{{ Outputs }}", 
"IdempotencyToken": "{{ IdempotencyToken }}"
}'
;
```
</TabItem>
<TabItem value="notify_terminate_provisioned_product_engine_workflow_result">

Notifies the result of the terminate engine execution.

```sql
EXEC aws.servicecatalog.records.notify_terminate_provisioned_product_engine_workflow_result 
@region='{{ region }}' --required 
@@json=
'{
"WorkflowToken": "{{ WorkflowToken }}", 
"RecordId": "{{ RecordId }}", 
"Status": "{{ Status }}", 
"FailureReason": "{{ FailureReason }}", 
"IdempotencyToken": "{{ IdempotencyToken }}"
}'
;
```
</TabItem>
<TabItem value="notify_update_provisioned_product_engine_workflow_result">

Notifies the result of the update engine execution.

```sql
EXEC aws.servicecatalog.records.notify_update_provisioned_product_engine_workflow_result 
@region='{{ region }}' --required 
@@json=
'{
"WorkflowToken": "{{ WorkflowToken }}", 
"RecordId": "{{ RecordId }}", 
"Status": "{{ Status }}", 
"FailureReason": "{{ FailureReason }}", 
"Outputs": "{{ Outputs }}", 
"IdempotencyToken": "{{ IdempotencyToken }}"
}'
;
```
</TabItem>
</Tabs>
