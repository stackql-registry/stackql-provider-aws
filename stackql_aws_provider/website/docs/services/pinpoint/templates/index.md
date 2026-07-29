--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_templates"
    values={[
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="list_templates">

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
    <td><CopyableCode code="item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each message template that's associated with your Amazon Pinpoint account and meets any filter criteria that you specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
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
    <td><a href="#list_templates"><CopyableCode code="list_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-template-type"><code>template-type</code></a></td>
    <td>Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.</td>
</tr>
<tr>
    <td><a href="#update_template_active_version"><CopyableCode code="update_template_active_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-template-type"><code>template-type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TemplateActiveVersionRequest"><code>TemplateActiveVersionRequest</code></a></td>
    <td></td>
    <td>Changes the status of a specific version of a message template to active.</td>
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
<tr id="parameter-template-name">
    <td><CopyableCode code="template-name" /></td>
    <td><code>string</code></td>
    <td>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</td>
</tr>
<tr id="parameter-template-type">
    <td><CopyableCode code="template-type" /></td>
    <td><code>string</code></td>
    <td>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.</td>
</tr>
<tr id="parameter-template-type">
    <td><CopyableCode code="template-type" /></td>
    <td><code>string</code></td>
    <td>The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_templates"
    values={[
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="list_templates">

Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.

```sql
SELECT
item,
next_token
FROM aws.pinpoint.templates
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `page-size` = '{{ page-size }}'
AND prefix = '{{ prefix }}'
AND `template-type` = '{{ template-type }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template_active_version"
    values={[
        { label: 'update_template_active_version', value: 'update_template_active_version' }
    ]}
>
<TabItem value="update_template_active_version">

Changes the status of a specific version of a message template to active.

```sql
UPDATE aws.pinpoint.templates
SET 
TemplateActiveVersionRequest = '{{ TemplateActiveVersionRequest }}'
WHERE 
`template-name` = '{{ template-name }}' --required
AND `template-type` = '{{ template-type }}' --required
AND region = '{{ region }}' --required
AND TemplateActiveVersionRequest = '{{ TemplateActiveVersionRequest }}' --required
RETURNING
message_body;
```
</TabItem>
</Tabs>
