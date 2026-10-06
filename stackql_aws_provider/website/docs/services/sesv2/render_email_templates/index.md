--- 
title: render_email_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - render_email_templates
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>render_email_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="render_email_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.render_email_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#test_render_email_template"><CopyableCode code="test_render_email_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateData"><code>TemplateData</code></a></td>
    <td></td>
    <td>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-template_name">
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the template.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="test_render_email_template"
    values={[
        { label: 'test_render_email_template', value: 'test_render_email_template' }
    ]}
>
<TabItem value="test_render_email_template">

Creates a preview of the MIME content of an email when provided with a template and a set of replacement data. You can execute this operation no more than once per second.

```sql
EXEC aws.sesv2.render_email_templates.test_render_email_template 
@template_name='{{ template_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TemplateData": "{{ TemplateData }}"
}'
;
```
</TabItem>
</Tabs>
