--- 
title: domain_units_for_parents
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_units_for_parents
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

Creates, updates, deletes, gets or lists a <code>domain_units_for_parents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_units_for_parents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.domain_units_for_parents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_domain_units_for_parent"
    values={[
        { label: 'list_domain_units_for_parent', value: 'list_domain_units_for_parent' }
    ]}
>
<TabItem value="list_domain_units_for_parent">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain unit summary. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain unit summary.</td>
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
    <td><a href="#list_domain_units_for_parent"><CopyableCode code="list_domain_units_for_parent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-parentDomainUnitIdentifier"><code>parentDomainUnitIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists child domain units for the specified parent domain unit.</td>
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
    <td>The ID of the domain in which you want to list domain units for a parent domain unit.</td>
</tr>
<tr id="parameter-parentDomainUnitIdentifier">
    <td><CopyableCode code="parentDomainUnitIdentifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent domain unit.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of domain units to return in a single call to ListDomainUnitsForParent. When the number of domain units to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListDomainUnitsForParent to list the next set of domain units.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of domain units is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of domain units, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListDomainUnitsForParent to list the next set of domain units.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_domain_units_for_parent"
    values={[
        { label: 'list_domain_units_for_parent', value: 'list_domain_units_for_parent' }
    ]}
>
<TabItem value="list_domain_units_for_parent">

Lists child domain units for the specified parent domain unit.

```sql
SELECT
id,
name
FROM aws.datazone.domain_units_for_parents
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND parentDomainUnitIdentifier = '{{ parentDomainUnitIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
