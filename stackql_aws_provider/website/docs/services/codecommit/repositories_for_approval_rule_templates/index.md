--- 
title: repositories_for_approval_rule_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories_for_approval_rule_templates
  - codecommit
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

Creates, updates, deletes, gets or lists a <code>repositories_for_approval_rule_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repositories_for_approval_rule_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.repositories_for_approval_rule_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repositories_for_approval_rule_template"
    values={[
        { label: 'list_repositories_for_approval_rule_template', value: 'list_repositories_for_approval_rule_template' }
    ]}
>
<TabItem value="list_repositories_for_approval_rule_template">

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
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>A list of repository names that are associated with the specified approval rule template.</td>
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
    <td><a href="#list_repositories_for_approval_rule_template"><CopyableCode code="list_repositories_for_approval_rule_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all repositories associated with the specified approval rule template.</td>
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
    defaultValue="list_repositories_for_approval_rule_template"
    values={[
        { label: 'list_repositories_for_approval_rule_template', value: 'list_repositories_for_approval_rule_template' }
    ]}
>
<TabItem value="list_repositories_for_approval_rule_template">

Lists all repositories associated with the specified approval rule template.

```sql
SELECT
repository_name
FROM aws.codecommit.repositories_for_approval_rule_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
