--- 
title: case_audit_events
hide_title: false
hide_table_of_contents: false
keywords:
  - case_audit_events
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

Creates, updates, deletes, gets or lists a <code>case_audit_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="case_audit_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.case_audit_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_case_audit_events"
    values={[
        { label: 'get_case_audit_events', value: 'get_case_audit_events' }
    ]}
>
<TabItem value="get_case_audit_events">

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
    <td><CopyableCode code="auditEvents" /></td>
    <td><code>array</code></td>
    <td>A list of case audits where each represents a particular edit of the case.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. This is null if there are no more results to return.</td>
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
    <td><a href="#get_case_audit_events"><CopyableCode code="get_case_audit_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the audit history about a specific case if it exists.</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the case.</td>
</tr>
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
    defaultValue="get_case_audit_events"
    values={[
        { label: 'get_case_audit_events', value: 'get_case_audit_events' }
    ]}
>
<TabItem value="get_case_audit_events">

Returns the audit history about a specific case if it exists.

```sql
SELECT
auditEvents,
nextToken
FROM aws.connectcases.case_audit_events
WHERE case_id = '{{ case_id }}' -- required
AND domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
