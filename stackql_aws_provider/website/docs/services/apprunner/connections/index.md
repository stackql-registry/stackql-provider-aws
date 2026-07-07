--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - apprunner
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apprunner.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connections"
    values={[
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="list_connections">

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
    <td><CopyableCode code="ConnectionSummaryList" /></td>
    <td><code>array</code></td>
    <td>A list of summary information records for connections. In a paginated request, the request returns up to MaxResults records for each call.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can pass in a subsequent request to get the next result page. Returned in a paginated request. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#list_connections"><CopyableCode code="list_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of App Runner connections that are associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionName"><code>ConnectionName</code></a>, <a href="#parameter-ProviderType"><code>ProviderType</code></a></td>
    <td></td>
    <td>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services. A connection resource is needed to access GitHub and Bitbucket repositories. Both require a user interface approval process through the App Runner console before you can use the connection.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the DeleteConnection action fails.</td>
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
    defaultValue="list_connections"
    values={[
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="list_connections">

Returns a list of App Runner connections that are associated with your Amazon Web Services account.

```sql
SELECT
ConnectionSummaryList,
NextToken
FROM aws.apprunner.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services. A connection resource is needed to access GitHub and Bitbucket repositories. Both require a user interface approval process through the App Runner console before you can use the connection.

```sql
INSERT INTO aws.apprunner.connections (
ConnectionName,
ProviderType,
Tags,
region
)
SELECT 
'{{ ConnectionName }}' /* required */,
'{{ ProviderType }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Connection
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connections resource.
    - name: ConnectionName
      value: "{{ ConnectionName }}"
      description: |
        A name for the new connection. It must be unique across all App Runner connections for the Amazon Web Services account in the Amazon Web Services Region.
    - name: ProviderType
      value: "{{ ProviderType }}"
      description: |
        The source repository provider.
      valid_values: ['GITHUB', 'BITBUCKET']
    - name: Tags
      description: |
        A list of metadata items that you can associate with your connection resource. A tag is a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the DeleteConnection action fails.

```sql
DELETE FROM aws.apprunner.connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
