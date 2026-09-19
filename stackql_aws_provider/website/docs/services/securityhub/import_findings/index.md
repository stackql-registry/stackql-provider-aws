--- 
title: import_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - import_findings
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>import_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.import_findings" /></td></tr>
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
    <td><a href="#disable_import_findings_for_product"><CopyableCode code="disable_import_findings_for_product" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-product_subscription_arn"><code>product_subscription_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the integration of the specified product with Security Hub CSPM. After the integration is disabled, findings from that product are no longer sent to Security Hub CSPM.</td>
</tr>
<tr>
    <td><a href="#enable_import_findings_for_product"><CopyableCode code="enable_import_findings_for_product" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductArn"><code>ProductArn</code></a></td>
    <td></td>
    <td>Enables the integration of a partner product with Security Hub CSPM. Integrated products send findings to Security Hub CSPM. When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub CSPM is applied.</td>
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
<tr id="parameter-product_subscription_arn">
    <td><CopyableCode code="product_subscription_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the integrated product to disable the integration for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="disable_import_findings_for_product"
    values={[
        { label: 'disable_import_findings_for_product', value: 'disable_import_findings_for_product' },
        { label: 'enable_import_findings_for_product', value: 'enable_import_findings_for_product' }
    ]}
>
<TabItem value="disable_import_findings_for_product">

Disables the integration of the specified product with Security Hub CSPM. After the integration is disabled, findings from that product are no longer sent to Security Hub CSPM.

```sql
EXEC aws.securityhub.import_findings.disable_import_findings_for_product 
@product_subscription_arn='{{ product_subscription_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_import_findings_for_product">

Enables the integration of a partner product with Security Hub CSPM. Integrated products send findings to Security Hub CSPM. When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub CSPM is applied.

```sql
EXEC aws.securityhub.import_findings.enable_import_findings_for_product 
@region='{{ region }}' --required 
@@json=
'{
"ProductArn": "{{ ProductArn }}"
}'
;
```
</TabItem>
</Tabs>
