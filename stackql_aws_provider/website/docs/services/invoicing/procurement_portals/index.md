--- 
title: procurement_portals
hide_title: false
hide_table_of_contents: false
keywords:
  - procurement_portals
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

Creates, updates, deletes, gets or lists a <code>procurement_portals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="procurement_portals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.invoicing.procurement_portals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_procurement_portals"
    values={[
        { label: 'list_procurement_portals', value: 'list_procurement_portals' }
    ]}
>
<TabItem value="list_procurement_portals">

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
    <td><CopyableCode code="default_feature_configurations" /></td>
    <td><code>object</code></td>
    <td>The default feature configurations for the procurement portal.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the procurement portal. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portal_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the procurement portal.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_name" /></td>
    <td><code>string</code></td>
    <td>The name of the procurement portal. (SAP_BUSINESS_NETWORK, COUPA)</td>
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
    <td><a href="#list_procurement_portals"><CopyableCode code="list_procurement_portals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Amazon Web Services-supported procurement portals for e-invoice delivery and purchase order retrieval. Each entry includes the portal identifier, name, and default feature configurations, which define the supported document and attachment types. For faster, more reliable responses, use pagination.</td>
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
    defaultValue="list_procurement_portals"
    values={[
        { label: 'list_procurement_portals', value: 'list_procurement_portals' }
    ]}
>
<TabItem value="list_procurement_portals">

Returns the Amazon Web Services-supported procurement portals for e-invoice delivery and purchase order retrieval. Each entry includes the portal identifier, name, and default feature configurations, which define the supported document and attachment types. For faster, more reliable responses, use pagination.

```sql
SELECT
default_feature_configurations,
portal_display_name,
portal_identifier,
portal_name
FROM aws.invoicing.procurement_portals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
