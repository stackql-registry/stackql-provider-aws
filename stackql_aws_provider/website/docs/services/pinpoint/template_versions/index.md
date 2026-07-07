--- 
title: template_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - template_versions
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

Creates, updates, deletes, gets or lists a <code>template_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.template_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_template_versions"
    values={[
        { label: 'list_template_versions', value: 'list_template_versions' }
    ]}
>
<TabItem value="list_template_versions">

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
    <td><CopyableCode code="Item" /></td>
    <td><code>array</code></td>
    <td>An array of responses, one for each version of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>The message that's returned from the API for the request to retrieve information about all the versions of the message template.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the request to retrieve information about all the versions of the message template.</td>
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
    <td><a href="#list_template_versions"><CopyableCode code="list_template_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template-name"><code>template-name</code></a>, <a href="#parameter-template-type"><code>template-type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-page-size"><code>page-size</code></a></td>
    <td>Retrieves information about all the versions of a specific message template.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_template_versions"
    values={[
        { label: 'list_template_versions', value: 'list_template_versions' }
    ]}
>
<TabItem value="list_template_versions">

Retrieves information about all the versions of a specific message template.

```sql
SELECT
Item,
Message,
NextToken,
RequestID
FROM aws.pinpoint.template_versions
WHERE `template-name` = '{{ template-name }}' -- required
AND `template-type` = '{{ template-type }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `page-size` = '{{ page-size }}'
;
```
</TabItem>
</Tabs>
