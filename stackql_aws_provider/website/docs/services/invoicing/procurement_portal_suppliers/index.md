--- 
title: procurement_portal_suppliers
hide_title: false
hide_table_of_contents: false
keywords:
  - procurement_portal_suppliers
  - invoicing
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

Creates, updates, deletes, gets or lists a <code>procurement_portal_suppliers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="procurement_portal_suppliers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.invoicing.procurement_portal_suppliers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_procurement_portal_suppliers"
    values={[
        { label: 'list_procurement_portal_suppliers', value: 'list_procurement_portal_suppliers' }
    ]}
>
<TabItem value="list_procurement_portal_suppliers">

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
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The two-letter ISO 3166-1 alpha-2 country code associated with the supplier. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment identifier for the supplier in the procurement portal. PROD for production env, or TEST for sandbox/test env. (PROD, TEST)</td>
</tr>
<tr>
    <td><CopyableCode code="seller_of_record" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services seller of record associated with the supplier—the Amazon Web Services legal entity that issues invoices for the account (for example, AWS_INC or AWS_EUROPE). (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supplier_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the supplier within the procurement portal.</td>
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
    <td><a href="#list_procurement_portal_suppliers"><CopyableCode code="list_procurement_portal_suppliers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the suppliers configured for a specified procurement portal, including supplier identifiers and associated metadata. For faster, more reliable responses, use pagination.</td>
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
    defaultValue="list_procurement_portal_suppliers"
    values={[
        { label: 'list_procurement_portal_suppliers', value: 'list_procurement_portal_suppliers' }
    ]}
>
<TabItem value="list_procurement_portal_suppliers">

Returns the suppliers configured for a specified procurement portal, including supplier identifiers and associated metadata. For faster, more reliable responses, use pagination.

```sql
SELECT
country_code,
environment,
seller_of_record,
supplier_identifier
FROM aws.invoicing.procurement_portal_suppliers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
