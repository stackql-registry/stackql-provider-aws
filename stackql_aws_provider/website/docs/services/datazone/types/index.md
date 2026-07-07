--- 
title: types
hide_title: false
hide_table_of_contents: false
keywords:
  - types
  - datazone
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

Creates, updates, deletes, gets or lists a <code>types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_types"
    values={[
        { label: 'search_types', value: 'search_types' }
    ]}
>
<TabItem value="search_types">

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
    <td><CopyableCode code="assetTypeItem" /></td>
    <td><code>object</code></td>
    <td>The asset type included in the results of the SearchTypes action.</td>
</tr>
<tr>
    <td><CopyableCode code="formTypeItem" /></td>
    <td><code>object</code></td>
    <td>The form type included in the results of the SearchTypes action.</td>
</tr>
<tr>
    <td><CopyableCode code="lineageNodeTypeItem" /></td>
    <td><code>object</code></td>
    <td>The details of a data lineage node type.</td>
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
    <td><a href="#search_types"><CopyableCode code="search_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for types in Amazon DataZone. Prerequisites: The --domain-identifier must refer to an existing Amazon DataZone domain. --search-scope must be one of the valid values including: ASSET_TYPE, GLOSSARY_TERM_TYPE, DATA_PRODUCT_TYPE. The --managed flag must be present without a value. The user must have permissions for form or asset types in the domain. If using --filters, ensure that the JSON is valid. Filters contain correct structure (attribute, value, operator).</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which to invoke the SearchTypes action.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_types"
    values={[
        { label: 'search_types', value: 'search_types' }
    ]}
>
<TabItem value="search_types">

Searches for types in Amazon DataZone. Prerequisites: The --domain-identifier must refer to an existing Amazon DataZone domain. --search-scope must be one of the valid values including: ASSET_TYPE, GLOSSARY_TERM_TYPE, DATA_PRODUCT_TYPE. The --managed flag must be present without a value. The user must have permissions for form or asset types in the domain. If using --filters, ensure that the JSON is valid. Filters contain correct structure (attribute, value, operator).

```sql
SELECT
assetTypeItem,
formTypeItem,
lineageNodeTypeItem
FROM aws.datazone.types
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
