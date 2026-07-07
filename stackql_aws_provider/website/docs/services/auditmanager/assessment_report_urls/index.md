--- 
title: assessment_report_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - assessment_report_urls
  - auditmanager
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

Creates, updates, deletes, gets or lists an <code>assessment_report_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assessment_report_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.assessment_report_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assessment_report_url"
    values={[
        { label: 'get_assessment_report_url', value: 'get_assessment_report_url' }
    ]}
>
<TabItem value="get_assessment_report_url">

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
    <td><CopyableCode code="hyperlinkName" /></td>
    <td><code>string</code></td>
    <td>The name or word that's used as a hyperlink to the URL. (pattern: &lt;code&gt;^&#91;\w\W\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="link" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the internet resource. (pattern: &lt;code&gt;^(https?:\/\/)?(www\.)?&#91;a-zA-Z0-9-_&#93;+(&#91;\.&#93;+&#91;a-zA-Z&#93;+)+&#91;\/\w&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_assessment_report_url"><CopyableCode code="get_assessment_report_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assessment_report_id"><code>assessment_report_id</code></a>, <a href="#parameter-assessment_id"><code>assessment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the URL of an assessment report in Audit Manager.</td>
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
<tr id="parameter-assessment_id">
    <td><CopyableCode code="assessment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the assessment.</td>
</tr>
<tr id="parameter-assessment_report_id">
    <td><CopyableCode code="assessment_report_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the assessment report.</td>
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
    defaultValue="get_assessment_report_url"
    values={[
        { label: 'get_assessment_report_url', value: 'get_assessment_report_url' }
    ]}
>
<TabItem value="get_assessment_report_url">

Gets the URL of an assessment report in Audit Manager.

```sql
SELECT
hyperlinkName,
link
FROM aws.auditmanager.assessment_report_urls
WHERE assessment_report_id = '{{ assessment_report_id }}' -- required
AND assessment_id = '{{ assessment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
