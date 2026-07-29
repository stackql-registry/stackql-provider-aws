--- 
title: app_assessment_compliance_drifts
hide_title: false
hide_table_of_contents: false
keywords:
  - app_assessment_compliance_drifts
  - resiliencehub
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

Creates, updates, deletes, gets or lists an <code>app_assessment_compliance_drifts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_assessment_compliance_drifts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.app_assessment_compliance_drifts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_app_assessment_compliance_drifts"
    values={[
        { label: 'list_app_assessment_compliance_drifts', value: 'list_app_assessment_compliance_drifts' }
    ]}
>
<TabItem value="list_app_assessment_compliance_drifts">

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
    <td><CopyableCode code="compliance_drifts" /></td>
    <td><code>array</code></td>
    <td>Indicates compliance drifts (recovery time objective (RTO) and recovery point objective (RPO)) detected for an assessed entity.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Null, or the token from a previous call to get the next set of results. (pattern: &lt;code&gt;^\S&#123;1,2000&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_app_assessment_compliance_drifts"><CopyableCode code="list_app_assessment_compliance_drifts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List of compliance drifts that were detected while running an assessment.</td>
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
    defaultValue="list_app_assessment_compliance_drifts"
    values={[
        { label: 'list_app_assessment_compliance_drifts', value: 'list_app_assessment_compliance_drifts' }
    ]}
>
<TabItem value="list_app_assessment_compliance_drifts">

List of compliance drifts that were detected while running an assessment.

```sql
SELECT
compliance_drifts,
next_token
FROM aws.resiliencehub.app_assessment_compliance_drifts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
