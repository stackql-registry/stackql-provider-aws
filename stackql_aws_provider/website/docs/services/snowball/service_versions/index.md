--- 
title: service_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - service_versions
  - snowball
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

Creates, updates, deletes, gets or lists a <code>service_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.service_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_service_versions"
    values={[
        { label: 'list_service_versions', value: 'list_service_versions' }
    ]}
>
<TabItem value="list_service_versions">

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
    <td><CopyableCode code="dependent_services" /></td>
    <td><code>array</code></td>
    <td>A list of names and versions of dependant services of the service for which the system provided supported versions.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Because HTTP requests are stateless, this is the starting point of the next list of returned ListServiceVersionsResult results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service for which the system provided supported versions. (KUBERNETES, EKS_ANYWHERE)</td>
</tr>
<tr>
    <td><CopyableCode code="service_versions" /></td>
    <td><code>array</code></td>
    <td>A list of supported versions.</td>
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
    <td><a href="#list_service_versions"><CopyableCode code="list_service_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all supported versions for Snow on-device services. Returns an array of ServiceVersion object containing the supported versions for a particular service.</td>
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
    defaultValue="list_service_versions"
    values={[
        { label: 'list_service_versions', value: 'list_service_versions' }
    ]}
>
<TabItem value="list_service_versions">

Lists all supported versions for Snow on-device services. Returns an array of ServiceVersion object containing the supported versions for a particular service.

```sql
SELECT
dependent_services,
next_token,
service_name,
service_versions
FROM aws.snowball.service_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
