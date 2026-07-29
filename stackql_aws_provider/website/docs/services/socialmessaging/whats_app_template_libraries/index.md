--- 
title: whats_app_template_libraries
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_template_libraries
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_template_libraries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_template_libraries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_template_libraries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_whats_app_template_library"
    values={[
        { label: 'list_whats_app_template_library', value: 'list_whats_app_template_library' }
    ]}
>
<TabItem value="list_whats_app_template_library">

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
    <td><CopyableCode code="template_body" /></td>
    <td><code>string</code></td>
    <td>The body text of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_body_example_params" /></td>
    <td><code>array</code></td>
    <td>Example parameter values for the template body, used to demonstrate how dynamic content appears in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_buttons" /></td>
    <td><code>array</code></td>
    <td>The buttons included in the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_category" /></td>
    <td><code>string</code></td>
    <td>The category of the template (for example, UTILITY or MARKETING).</td>
</tr>
<tr>
    <td><CopyableCode code="template_header" /></td>
    <td><code>string</code></td>
    <td>The header text of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the template in Meta's library. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_industry" /></td>
    <td><code>array</code></td>
    <td>The industries the template is designed for.</td>
</tr>
<tr>
    <td><CopyableCode code="template_language" /></td>
    <td><code>string</code></td>
    <td>The language code for the template (for example, en_US).</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_topic" /></td>
    <td><code>string</code></td>
    <td>The topic or subject matter of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_use_case" /></td>
    <td><code>string</code></td>
    <td>The intended use case for the template.</td>
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
    <td><a href="#list_whats_app_template_library"><CopyableCode code="list_whats_app_template_library" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists templates available in Meta's template library for WhatsApp messaging.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the WhatsApp Business Account to list library templates for.</td>
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
    defaultValue="list_whats_app_template_library"
    values={[
        { label: 'list_whats_app_template_library', value: 'list_whats_app_template_library' }
    ]}
>
<TabItem value="list_whats_app_template_library">

Lists templates available in Meta's template library for WhatsApp messaging.

```sql
SELECT
template_body,
template_body_example_params,
template_buttons,
template_category,
template_header,
template_id,
template_industry,
template_language,
template_name,
template_topic,
template_use_case
FROM aws.socialmessaging.whats_app_template_libraries
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
