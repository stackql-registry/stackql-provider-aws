--- 
title: code_security_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - code_security_integrations
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>code_security_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_security_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.code_security_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_code_security_integration"
    values={[
        { label: 'get_code_security_integration', value: 'get_code_security_integration' },
        { label: 'list_code_security_integrations', value: 'list_code_security_integrations' }
    ]}
>
<TabItem value="get_code_security_integration">

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
    <td>The name of the code security integration. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$:.&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationUrl" /></td>
    <td><code>string</code></td>
    <td>The URL used to authorize the integration with the repository provider. This is only returned if reauthorization is required to fix a connection issue. Otherwise, it is null.</td>
</tr>
<tr>
    <td><CopyableCode code="createdOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the code security integration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="integrationArn" /></td>
    <td><code>string</code></td>
    <td>arn:aws:inspector2:::codesecurity-integration/ (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:inspector2:&#91;a-z&#93;&#123;2&#125;(-gov)?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:codesecurity-integration/&#91;a-f0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the code security integration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the code security integration. (PENDING, IN_PROGRESS, ACTIVE, INACTIVE, DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the code security integration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the code security integration.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of repository provider for the integration. (GITLAB_SELF_MANAGED, GITHUB)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_code_security_integrations">

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
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td>A list of code security integration summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</td>
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
    <td><a href="#get_code_security_integration"><CopyableCode code="get_code_security_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a code security integration.</td>
</tr>
<tr>
    <td><a href="#list_code_security_integrations"><CopyableCode code="list_code_security_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all code security integrations in your account.</td>
</tr>
<tr>
    <td><a href="#create_code_security_integration"><CopyableCode code="create_code_security_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a code security integration with a source code repository provider. After calling the CreateCodeSecurityIntegration operation, you complete authentication and authorization with your provider. Next you call the UpdateCodeSecurityIntegration operation to provide the details to complete the integration setup</td>
</tr>
<tr>
    <td><a href="#update_code_security_integration"><CopyableCode code="update_code_security_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-integrationArn"><code>integrationArn</code></a>, <a href="#parameter-details"><code>details</code></a></td>
    <td></td>
    <td>Updates an existing code security integration. After calling the CreateCodeSecurityIntegration operation, you complete authentication and authorization with your provider. Next you call the UpdateCodeSecurityIntegration operation to provide the details to complete the integration setup</td>
</tr>
<tr>
    <td><a href="#delete_code_security_integration"><CopyableCode code="delete_code_security_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a code security integration.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_code_security_integration"
    values={[
        { label: 'get_code_security_integration', value: 'get_code_security_integration' },
        { label: 'list_code_security_integrations', value: 'list_code_security_integrations' }
    ]}
>
<TabItem value="get_code_security_integration">

Retrieves information about a code security integration.

```sql
SELECT
name,
authorizationUrl,
createdOn,
integrationArn,
lastUpdateOn,
status,
statusReason,
tags,
type_
FROM aws.inspector2.code_security_integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_code_security_integrations">

Lists all code security integrations in your account.

```sql
SELECT
integrations,
nextToken
FROM aws.inspector2.code_security_integrations
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_code_security_integration"
    values={[
        { label: 'create_code_security_integration', value: 'create_code_security_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_code_security_integration">

Creates a code security integration with a source code repository provider. After calling the CreateCodeSecurityIntegration operation, you complete authentication and authorization with your provider. Next you call the UpdateCodeSecurityIntegration operation to provide the details to complete the integration setup

```sql
INSERT INTO aws.inspector2.code_security_integrations (
name,
type,
details,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ details }}',
'{{ tags }}',
'{{ region }}'
RETURNING
authorizationUrl,
integrationArn,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: code_security_integrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the code_security_integrations resource.
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['GITLAB_SELF_MANAGED', 'GITHUB']
    - name: details
      description: |
        Contains details required to create a code security integration with a specific repository provider.
      value:
        gitlabSelfManaged:
          instanceUrl: "{{ instanceUrl }}"
          accessToken: "{{ accessToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_code_security_integration"
    values={[
        { label: 'update_code_security_integration', value: 'update_code_security_integration' }
    ]}
>
<TabItem value="update_code_security_integration">

Updates an existing code security integration. After calling the CreateCodeSecurityIntegration operation, you complete authentication and authorization with your provider. Next you call the UpdateCodeSecurityIntegration operation to provide the details to complete the integration setup

```sql
UPDATE aws.inspector2.code_security_integrations
SET 
integrationArn = '{{ integrationArn }}',
details = '{{ details }}'
WHERE 
region = '{{ region }}' --required
AND integrationArn = '{{ integrationArn }}' --required
AND details = '{{ details }}' --required
RETURNING
integrationArn,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_code_security_integration"
    values={[
        { label: 'delete_code_security_integration', value: 'delete_code_security_integration' }
    ]}
>
<TabItem value="delete_code_security_integration">

Deletes a code security integration.

```sql
DELETE FROM aws.inspector2.code_security_integrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
