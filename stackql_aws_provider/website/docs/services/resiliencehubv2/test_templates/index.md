--- 
title: test_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - test_templates
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>test_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.test_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test_template"
    values={[
        { label: 'get_test_template', value: 'get_test_template' },
        { label: 'list_test_templates', value: 'list_test_templates' }
    ]}
>
<TabItem value="get_test_template">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the test template.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The fault actions the test template runs.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the test template.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>The parameters the test template accepts.</td>
</tr>
<tr>
    <td><CopyableCode code="test_template_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):(&#91;0-9&#93;&#123;12&#125;|aws):&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_test_templates">

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
    <td><CopyableCode code="test_templates" /></td>
    <td><code>array</code></td>
    <td>The list of test template summaries.</td>
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
    <td><a href="#get_test_template"><CopyableCode code="get_test_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-testTemplateArn"><code>testTemplateArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a resilience test template by ARN, including the parameters it accepts and the fault actions it runs.</td>
</tr>
<tr>
    <td><a href="#list_test_templates"><CopyableCode code="list_test_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the available resilience test templates. A test template is a pre-configured, AWS recommended test that defines which resilience capability to validate.</td>
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
<tr id="parameter-testTemplateArn">
    <td><CopyableCode code="testTemplateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the test template to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_test_template"
    values={[
        { label: 'get_test_template', value: 'get_test_template' },
        { label: 'list_test_templates', value: 'list_test_templates' }
    ]}
>
<TabItem value="get_test_template">

Retrieves a resilience test template by ARN, including the parameters it accepts and the fault actions it runs.

```sql
SELECT
name,
actions,
description,
parameters,
test_template_arn
FROM aws.resiliencehubv2.test_templates
WHERE testTemplateArn = '{{ testTemplateArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_test_templates">

Lists the available resilience test templates. A test template is a pre-configured, AWS recommended test that defines which resilience capability to validate.

```sql
SELECT
test_templates
FROM aws.resiliencehubv2.test_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
