--- 
title: template_costs
hide_title: false
hide_table_of_contents: false
keywords:
  - template_costs
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>template_costs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_costs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.template_costs" /></td></tr>
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
    <td><a href="#estimate_template_cost"><CopyableCode code="estimate_template_cost" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemplateBody"><code>TemplateBody</code></a>, <a href="#parameter-TemplateURL"><code>TemplateURL</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.</td>
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
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of Parameter structures that specify input parameters.</td>
</tr>
<tr id="parameter-TemplateBody">
    <td><CopyableCode code="TemplateBody" /></td>
    <td><code>string</code></td>
    <td>Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. Conditional: You must pass TemplateBody or TemplateURL. If both are passed, only TemplateBody is used.</td>
</tr>
<tr id="parameter-TemplateURL">
    <td><CopyableCode code="TemplateURL" /></td>
    <td><code>string</code></td>
    <td>The URL of a file that contains the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with https:​//. URLs from S3 static websites are not supported. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="estimate_template_cost"
    values={[
        { label: 'estimate_template_cost', value: 'estimate_template_cost' }
    ]}
>
<TabItem value="estimate_template_cost">

Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.

```sql
EXEC aws.cloudformation.template_costs.estimate_template_cost 
@region='{{ region }}' --required, 
@TemplateBody='{{ TemplateBody }}', 
@TemplateURL='{{ TemplateURL }}', 
@Parameters='{{ Parameters }}'
;
```
</TabItem>
</Tabs>
