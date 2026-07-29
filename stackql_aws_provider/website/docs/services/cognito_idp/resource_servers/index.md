--- 
title: resource_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_servers
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>resource_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.resource_servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_server"
    values={[
        { label: 'describe_resource_server', value: 'describe_resource_server' }
    ]}
>
<TabItem value="describe_resource_server">

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
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https:​//solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens. (pattern: &lt;code&gt;&#91;\x21\x23-\x5B\x5D-\x7E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resource server. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scopes" /></td>
    <td><code>array</code></td>
    <td>A list of scopes that are defined for the resource server.</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool that contains the resource server configuration. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_resource_server"><CopyableCode code="describe_resource_server" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a resource server. For more information about resource servers, see Access control with resource servers.</td>
</tr>
<tr>
    <td><a href="#create_resource_server"><CopyableCode code="create_resource_server" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Creates a new OAuth2.0 resource server and defines custom scopes within it. Resource servers are associated with custom scopes and machine-to-machine (M2M) authorization. For more information, see Access control with resource servers. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_resource_server"><CopyableCode code="update_resource_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Updates the name and scopes of a resource server. All other fields are read-only. For more information about resource servers, see Access control with resource servers. If you don't provide a value for an attribute, it is set to the default value. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_resource_server"><CopyableCode code="delete_resource_server" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource server. After you delete a resource server, users can no longer generate access tokens with scopes that are associate with that resource server. Resource servers are associated with custom scopes and machine-to-machine (M2M) authorization. For more information, see Access control with resource servers. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#list_resource_servers"><CopyableCode code="list_resource_servers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns all resource servers and their details. For more information about resource servers, see Access control with resource servers. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="describe_resource_server"
    values={[
        { label: 'describe_resource_server', value: 'describe_resource_server' }
    ]}
>
<TabItem value="describe_resource_server">

Describes a resource server. For more information about resource servers, see Access control with resource servers.

```sql
SELECT
identifier,
name,
scopes,
user_pool_id
FROM aws.cognito_idp.resource_servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_server"
    values={[
        { label: 'create_resource_server', value: 'create_resource_server' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_server">

Creates a new OAuth2.0 resource server and defines custom scopes within it. Resource servers are associated with custom scopes and machine-to-machine (M2M) authorization. For more information, see Access control with resource servers. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.resource_servers (
UserPoolId,
Identifier,
Name,
Scopes,
region
)
SELECT 
'{{ UserPoolId }}' /* required */,
'{{ Identifier }}',
'{{ Name }}',
'{{ Scopes }}',
'{{ region }}'
RETURNING
resource_server
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_servers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_servers resource.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The ID of the user pool where you want to create a resource server.
    - name: Identifier
      value: "{{ Identifier }}"
      description: |
        A unique resource server identifier for the resource server. The identifier can be an API friendly name like solar-system-data. You can also set an API URL like https://solar-system-data-api.example.com as your identifier. Amazon Cognito represents scopes in the access token in the format $resource-server-identifier/$scope. Longer scope-identifier strings increase the size of your access tokens.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name for the resource server.
    - name: Scopes
      description: |
        A list of custom scopes. Each scope is a key-value map with the keys ScopeName and ScopeDescription. The name of a custom scope is a combination of ScopeName and the resource server Name in this request, for example MyResourceServerName/MyScopeName.
      value:
        - ScopeName: "{{ ScopeName }}"
          ScopeDescription: "{{ ScopeDescription }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_server"
    values={[
        { label: 'update_resource_server', value: 'update_resource_server' }
    ]}
>
<TabItem value="update_resource_server">

Updates the name and scopes of a resource server. All other fields are read-only. For more information about resource servers, see Access control with resource servers. If you don't provide a value for an attribute, it is set to the default value. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.resource_servers
SET 
UserPoolId = '{{ UserPoolId }}',
Identifier = '{{ Identifier }}',
Name = '{{ Name }}',
Scopes = '{{ Scopes }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
RETURNING
resource_server;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_server"
    values={[
        { label: 'delete_resource_server', value: 'delete_resource_server' }
    ]}
>
<TabItem value="delete_resource_server">

Deletes a resource server. After you delete a resource server, users can no longer generate access tokens with scopes that are associate with that resource server. Resource servers are associated with custom scopes and machine-to-machine (M2M) authorization. For more information, see Access control with resource servers. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
DELETE FROM aws.cognito_idp.resource_servers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_resource_servers"
    values={[
        { label: 'list_resource_servers', value: 'list_resource_servers' }
    ]}
>
<TabItem value="list_resource_servers">

Given a user pool ID, returns all resource servers and their details. For more information about resource servers, see Access control with resource servers. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.resource_servers.list_resource_servers 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
