--- 
title: cluster_session_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_session_credentials
  - emr
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

Creates, updates, deletes, gets or lists a <code>cluster_session_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_session_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.cluster_session_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_session_credentials"
    values={[
        { label: 'get_cluster_session_credentials', value: 'get_cluster_session_credentials' }
    ]}
>
<TabItem value="get_cluster_session_credentials">

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
    <td><CopyableCode code="Credentials" /></td>
    <td><code>object</code></td>
    <td>The credentials that you can use to connect to cluster endpoints that support username and password authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the credentials that are returned by the GetClusterSessionCredentials API expire.</td>
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
    <td><a href="#get_cluster_session_credentials"><CopyableCode code="get_cluster_session_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.</td>
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
    defaultValue="get_cluster_session_credentials"
    values={[
        { label: 'get_cluster_session_credentials', value: 'get_cluster_session_credentials' }
    ]}
>
<TabItem value="get_cluster_session_credentials">

Provides temporary, HTTP basic credentials that are associated with a given runtime IAM role and used by a cluster with fine-grained access control activated. You can use these credentials to connect to cluster endpoints that support username and password authentication.

```sql
SELECT
Credentials,
ExpiresAt
FROM aws.emr.cluster_session_credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
