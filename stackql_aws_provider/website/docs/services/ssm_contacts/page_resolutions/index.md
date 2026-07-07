--- 
title: page_resolutions
hide_title: false
hide_table_of_contents: false
keywords:
  - page_resolutions
  - ssm_contacts
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

Creates, updates, deletes, gets or lists a <code>page_resolutions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="page_resolutions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.page_resolutions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_page_resolutions"
    values={[
        { label: 'list_page_resolutions', value: 'list_page_resolutions' }
    ]}
>
<TabItem value="list_page_resolutions">

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
    <td><CopyableCode code="ContactArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a contact in the engagement resolution process. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):ssm-contacts:&#91;-\w+=\/,.@&#93;*:&#91;0-9&#93;+:(&#91;\w+=\/,.@:-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StageIndex" /></td>
    <td><code>integer</code></td>
    <td>The stage in the escalation plan that resolves to this contact.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of contact for a resolution step. (PERSONAL, ESCALATION, ONCALL_SCHEDULE)</td>
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
    <td><a href="#list_page_resolutions"><CopyableCode code="list_page_resolutions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of escalation plan &gt; on-call schedule &gt; contact.</td>
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
    defaultValue="list_page_resolutions"
    values={[
        { label: 'list_page_resolutions', value: 'list_page_resolutions' }
    ]}
>
<TabItem value="list_page_resolutions">

Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of escalation plan &gt; on-call schedule &gt; contact.

```sql
SELECT
ContactArn,
StageIndex,
Type
FROM aws.ssm_contacts.page_resolutions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
