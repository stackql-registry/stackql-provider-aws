--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - codeconnections
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeconnections.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

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
    <td><CopyableCode code="ConnectionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection. The ARN is used as the connection reference when the connection is shared between Amazon Web Services services. The ARN is never reused if the connection is deleted. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:.+:.+:&#91;0-9&#93;&#123;12&#125;:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionName" /></td>
    <td><code>string</code></td>
    <td>The name of the connection. Connection names must be unique in an Amazon Web Services account. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the connection. (PENDING, AVAILABLE, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="HostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the host associated with the connection. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:(codestar-connections|codeconnections):.+:&#91;0-9&#93;&#123;12&#125;:host\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProviderType" /></td>
    <td><code>string</code></td>
    <td>The name of the external provider where your third-party code repository is configured. (Bitbucket, GitHub, GitHubEnterpriseServer, GitLab, GitLabSelfManaged, AzureDevOps)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="Connections" /></td>
    <td><code>array</code></td>
    <td>A list of connections and the details for each connection, such as status, owner, and provider type.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used in the next ListConnections call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
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
    <td><a href="#get_connection"><CopyableCode code="get_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the connection ARN and details such as status, owner, and provider type.</td>
</tr>
<tr>
    <td><a href="#list_connections"><CopyableCode code="list_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the connections associated with your account.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionName"><code>ConnectionName</code></a></td>
    <td></td>
    <td>Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The connection to be deleted.</td>
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
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' },
        { label: 'list_connections', value: 'list_connections' }
    ]}
>
<TabItem value="get_connection">

Returns the connection ARN and details such as status, owner, and provider type.

```sql
SELECT
ConnectionArn,
ConnectionName,
ConnectionStatus,
HostArn,
OwnerAccountId,
ProviderType
FROM aws.codeconnections.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connections">

Lists the connections associated with your account.

```sql
SELECT
Connections,
NextToken
FROM aws.codeconnections.connections
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

Creates a connection that can then be given to other Amazon Web Services services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.

```sql
INSERT INTO aws.codeconnections.connections (
ProviderType,
ConnectionName,
Tags,
HostArn,
region
)
SELECT 
'{{ ProviderType }}',
'{{ ConnectionName }}' /* required */,
'{{ Tags }}',
'{{ HostArn }}',
'{{ region }}'
RETURNING
ConnectionArn,
Tags
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
    - name: ProviderType
      value: "{{ ProviderType }}"
      description: |
        The name of the external provider where your third-party code repository is configured.
      valid_values: ['Bitbucket', 'GitHub', 'GitHubEnterpriseServer', 'GitLab', 'GitLabSelfManaged', 'AzureDevOps']
    - name: ConnectionName
      value: "{{ ConnectionName }}"
      description: |
        The name of the connection to be created.
    - name: Tags
      description: |
        The key-value pair to use when tagging the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: HostArn
      value: "{{ HostArn }}"
      description: |
        The Amazon Resource Name (ARN) of the host associated with the connection to be created.
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

The connection to be deleted.

```sql
DELETE FROM aws.codeconnections.connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
