--- 
title: all_related_items
hide_title: false
hide_table_of_contents: false
keywords:
  - all_related_items
  - connectcases
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

Creates, updates, deletes, gets or lists an <code>all_related_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="all_related_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.all_related_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_all_related_items"
    values={[
        { label: 'search_all_related_items', value: 'search_all_related_items' }
    ]}
>
<TabItem value="search_all_related_items">

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
    <td><CopyableCode code="association_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which a related item was associated with a case.</td>
</tr>
<tr>
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the case.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Represents the content of a particular type of related item.</td>
</tr>
<tr>
    <td><CopyableCode code="performed_by" /></td>
    <td><code>object</code></td>
    <td>Represents the entity that performed the action.</td>
</tr>
<tr>
    <td><CopyableCode code="related_item_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of a related item.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Type of a related item. (Contact, Comment, File, Sla, ConnectCase, Custom)</td>
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
    <td><a href="#search_all_related_items"><CopyableCode code="search_all_related_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for related items across all cases within a domain. This is a global search operation that returns related items from multiple cases, unlike the case-specific SearchRelatedItems API. Use cases Following are common uses cases for this API: Find cases with similar issues across the domain. For example, search for all cases containing comments about "product defect" to identify patterns and existing solutions. Locate all cases associated with specific contacts or orders. For example, find all cases linked to a contactArn to understand the complete customer journey. Monitor SLA compliance across cases. For example, search for all cases with "Active" SLA status to prioritize remediation efforts. Important things to know This API returns case identifiers, not complete case objects. To retrieve full case details, you must make additional calls to the GetCase API for each returned case ID. This API searches across related items content, not case fields. Use the SearchCases API to search within case field values. Endpoints: See Amazon Connect endpoints and quotas.</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cases domain.</td>
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
    defaultValue="search_all_related_items"
    values={[
        { label: 'search_all_related_items', value: 'search_all_related_items' }
    ]}
>
<TabItem value="search_all_related_items">

Searches for related items across all cases within a domain. This is a global search operation that returns related items from multiple cases, unlike the case-specific SearchRelatedItems API. Use cases Following are common uses cases for this API: Find cases with similar issues across the domain. For example, search for all cases containing comments about "product defect" to identify patterns and existing solutions. Locate all cases associated with specific contacts or orders. For example, find all cases linked to a contactArn to understand the complete customer journey. Monitor SLA compliance across cases. For example, search for all cases with "Active" SLA status to prioritize remediation efforts. Important things to know This API returns case identifiers, not complete case objects. To retrieve full case details, you must make additional calls to the GetCase API for each returned case ID. This API searches across related items content, not case fields. Use the SearchCases API to search within case field values. Endpoints: See Amazon Connect endpoints and quotas.

```sql
SELECT
association_time,
case_id,
content,
performed_by,
related_item_id,
tags,
type_
FROM aws.connectcases.all_related_items
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
