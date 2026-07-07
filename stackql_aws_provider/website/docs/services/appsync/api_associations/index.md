--- 
title: api_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - api_associations
  - appsync
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

Creates, updates, deletes, gets or lists an <code>api_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.api_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api_association"
    values={[
        { label: 'get_api_association', value: 'get_api_association' }
    ]}
>
<TabItem value="get_api_association">

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
    <td><CopyableCode code="apiId" /></td>
    <td><code>string</code></td>
    <td>The API ID.</td>
</tr>
<tr>
    <td><CopyableCode code="associationStatus" /></td>
    <td><code>string</code></td>
    <td>Identifies the status of an association. PROCESSING: The API association is being created. You cannot modify association requests during processing. SUCCESS: The API association was successful. You can modify associations after success. FAILED: The API association has failed. You can modify associations after failure. (PROCESSING, FAILED, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentDetail" /></td>
    <td><code>string</code></td>
    <td>Details about the last deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The domain name. (pattern: &lt;code&gt;^(\*&#91;\w\d-&#93;*\.)?(&#91;\w\d-&#93;+\.)+&#91;\w\d-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_api_association"><CopyableCode code="get_api_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an ApiAssociation object.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name.</td>
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
    defaultValue="get_api_association"
    values={[
        { label: 'get_api_association', value: 'get_api_association' }
    ]}
>
<TabItem value="get_api_association">

Retrieves an ApiAssociation object.

```sql
SELECT
apiId,
associationStatus,
deploymentDetail,
domainName
FROM aws.appsync.api_associations
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
