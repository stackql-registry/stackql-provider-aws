--- 
title: managed_job_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_job_templates
  - iot
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

Creates, updates, deletes, gets or lists a <code>managed_job_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_job_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.managed_job_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_managed_job_template"
    values={[
        { label: 'describe_managed_job_template', value: 'describe_managed_job_template' },
        { label: 'list_managed_job_templates', value: 'list_managed_job_templates' }
    ]}
>
<TabItem value="describe_managed_job_template">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The unique description of a managed template. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document" /></td>
    <td><code>string</code></td>
    <td>The document schema for a managed job template.</td>
</tr>
<tr>
    <td><CopyableCode code="documentParameters" /></td>
    <td><code>array</code></td>
    <td>A map of key-value pairs that you can use as guidance to specify the inputs for creating a job from a managed template. documentParameters can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.</td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>A list of environments that are supported with the managed job template.</td>
</tr>
<tr>
    <td><CopyableCode code="templateArn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) of the managed template. (pattern: &lt;code&gt;^arn:&#91;!-~&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The unique name of a managed template, such as AWS-Reboot.</td>
</tr>
<tr>
    <td><CopyableCode code="templateVersion" /></td>
    <td><code>string</code></td>
    <td>The version for a managed template. (pattern: &lt;code&gt;^&#91;1-9&#93;+.&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_job_templates">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for a managed template. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>A list of environments that are supported with the managed job template.</td>
</tr>
<tr>
    <td><CopyableCode code="templateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for a managed template. (pattern: &lt;code&gt;^arn:&#91;!-~&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The unique Name for a managed template.</td>
</tr>
<tr>
    <td><CopyableCode code="templateVersion" /></td>
    <td><code>string</code></td>
    <td>The version for a managed template. (pattern: &lt;code&gt;^&#91;1-9&#93;+.&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_managed_job_template"><CopyableCode code="describe_managed_job_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_name"><code>template_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-templateVersion"><code>templateVersion</code></a></td>
    <td>View details of a managed job template.</td>
</tr>
<tr>
    <td><a href="#list_managed_job_templates"><CopyableCode code="list_managed_job_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-templateName"><code>templateName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of managed job templates.</td>
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
    <td>The unique name of a managed job template, which is required.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of entries that can be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next set of results.</td>
</tr>
<tr id="parameter-templateName">
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>An optional parameter for template name. If specified, only the versions of the managed job templates that have the specified template name will be returned.</td>
</tr>
<tr id="parameter-templateVersion">
    <td><CopyableCode code="templateVersion" /></td>
    <td><code>string</code></td>
    <td>An optional parameter to specify version of a managed template. If not specified, the pre-defined default version is returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_managed_job_template"
    values={[
        { label: 'describe_managed_job_template', value: 'describe_managed_job_template' },
        { label: 'list_managed_job_templates', value: 'list_managed_job_templates' }
    ]}
>
<TabItem value="describe_managed_job_template">

View details of a managed job template.

```sql
SELECT
description,
document,
documentParameters,
environments,
templateArn,
templateName,
templateVersion
FROM aws.iot.managed_job_templates
WHERE template_name = '{{ template_name }}' -- required
AND region = '{{ region }}' -- required
AND templateVersion = '{{ templateVersion }}'
;
```
</TabItem>
<TabItem value="list_managed_job_templates">

Returns a list of managed job templates.

```sql
SELECT
description,
environments,
templateArn,
templateName,
templateVersion
FROM aws.iot.managed_job_templates
WHERE region = '{{ region }}' -- required
AND templateName = '{{ templateName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
