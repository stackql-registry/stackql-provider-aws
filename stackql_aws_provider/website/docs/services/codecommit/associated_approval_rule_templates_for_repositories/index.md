--- 
title: associated_approval_rule_templates_for_repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_approval_rule_templates_for_repositories
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

Creates, updates, deletes, gets or lists an <code>associated_approval_rule_templates_for_repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_approval_rule_templates_for_repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.associated_approval_rule_templates_for_repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_associated_approval_rule_templates_for_repository"
    values={[
        { label: 'list_associated_approval_rule_templates_for_repository', value: 'list_associated_approval_rule_templates_for_repository' }
    ]}
>
<TabItem value="list_associated_approval_rule_templates_for_repository">

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
    <td><CopyableCode code="approval_rule_template_name" /></td>
    <td><code>string</code></td>
    <td>The names of all approval rule templates associated with the repository.</td>
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
    <td><a href="#list_associated_approval_rule_templates_for_repository"><CopyableCode code="list_associated_approval_rule_templates_for_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all approval rule templates that are associated with a specified repository.</td>
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
    defaultValue="list_associated_approval_rule_templates_for_repository"
    values={[
        { label: 'list_associated_approval_rule_templates_for_repository', value: 'list_associated_approval_rule_templates_for_repository' }
    ]}
>
<TabItem value="list_associated_approval_rule_templates_for_repository">

Lists all approval rule templates that are associated with a specified repository.

```sql
SELECT
approval_rule_template_name
FROM aws.codecommit.associated_approval_rule_templates_for_repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
