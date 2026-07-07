--- 
title: template_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - template_aliases
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>template_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.template_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_template_aliases"
    values={[
        { label: 'list_template_aliases', value: 'list_template_aliases' }
    ]}
>
<TabItem value="list_template_aliases">

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
    <td><CopyableCode code="AliasName" /></td>
    <td><code>string</code></td>
    <td>The display name of the template alias. (pattern: &lt;code&gt;&#91;\w\-&#93;+|(\$LATEST)|(\$PUBLISHED)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the template alias.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the template alias.</td>
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
    <td><a href="#list_template_aliases"><CopyableCode code="list_template_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-result"><code>max-result</code></a></td>
    <td>Lists all the aliases of a template.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that contains the template aliases that you're listing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the template.</td>
</tr>
<tr id="parameter-max-result">
    <td><CopyableCode code="max-result" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_template_aliases"
    values={[
        { label: 'list_template_aliases', value: 'list_template_aliases' }
    ]}
>
<TabItem value="list_template_aliases">

Lists all the aliases of a template.

```sql
SELECT
AliasName,
Arn,
TemplateVersionNumber
FROM aws.quicksight.template_aliases
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-result` = '{{ max-result }}'
;
```
</TabItem>
</Tabs>
