--- 
title: environment_account_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_account_connections
  - proton
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

Creates, updates, deletes, gets or lists an <code>environment_account_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_account_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.environment_account_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_account_connection"
    values={[
        { label: 'get_environment_account_connection', value: 'get_environment_account_connection' },
        { label: 'list_environment_account_connections', value: 'list_environment_account_connections' }
    ]}
>
<TabItem value="get_environment_account_connection">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment account connection. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment account connection.</td>
</tr>
<tr>
    <td><CopyableCode code="codebuildRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):iam::\d&#123;12&#125;:role/(&#91;\w+=,.@-&#93;&#123;1,512&#125;&#91;/:&#93;)*(&#91;\w+=,.@-&#93;&#123;1,64&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="componentRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account. The environment account connection must have a componentRoleArn to allow directly defined components to be associated with any environments running in the account. For more information about components, see Proton components in the Proton User Guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):iam::\d&#123;12&#125;:role/(&#91;\w+=,.@-&#93;&#123;1,512&#125;&#91;/:&#93;)*(&#91;\w+=,.@-&#93;&#123;1,64&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentAccountId" /></td>
    <td><code>string</code></td>
    <td>The environment account that's connected to the environment account connection. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment that's associated with the environment account connection. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment account connection was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="managementAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the management account that's connected to the environment account connection. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment account connection request was made.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM service role that's associated with the environment account connection. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the environment account connection. (PENDING, CONNECTED, REJECTED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environment_account_connections">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment account connection. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment account connection.</td>
</tr>
<tr>
    <td><CopyableCode code="componentRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account. The environment account connection must have a componentRoleArn to allow directly defined components to be associated with any environments running in the account. For more information about components, see Proton components in the Proton User Guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment account that's connected to the environment account connection. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment that's associated with the environment account connection. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment account connection was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="managementAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the management account that's connected to the environment account connection. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requestedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the environment account connection request was made.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM service role that's associated with the environment account connection. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the environment account connection. (PENDING, CONNECTED, REJECTED)</td>
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
    <td><a href="#get_environment_account_connection"><CopyableCode code="get_environment_account_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>In an environment account, get the detailed data for an environment account connection. For more information, see Environment account connections in the Proton User guide.</td>
</tr>
<tr>
    <td><a href="#list_environment_account_connections"><CopyableCode code="list_environment_account_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>View a list of environment account connections. For more information, see Environment account connections in the Proton User guide.</td>
</tr>
<tr>
    <td><a href="#create_environment_account_connection"><CopyableCode code="create_environment_account_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentName"><code>environmentName</code></a>, <a href="#parameter-managementAccountId"><code>managementAccountId</code></a></td>
    <td></td>
    <td>Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account. An environment account connection is a secure bi-directional connection between a management account and an environment account that maintains authorization and permissions. For more information, see Environment account connections in the Proton User guide.</td>
</tr>
<tr>
    <td><a href="#update_environment_account_connection"><CopyableCode code="update_environment_account_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>In an environment account, update an environment account connection to use a new IAM role. For more information, see Environment account connections in the Proton User guide.</td>
</tr>
<tr>
    <td><a href="#delete_environment_account_connection"><CopyableCode code="delete_environment_account_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>In an environment account, delete an environment account connection. After you delete an environment account connection that’s in use by an Proton environment, Proton can’t manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection. For more information, see Environment account connections in the Proton User guide.</td>
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
    defaultValue="get_environment_account_connection"
    values={[
        { label: 'get_environment_account_connection', value: 'get_environment_account_connection' },
        { label: 'list_environment_account_connections', value: 'list_environment_account_connections' }
    ]}
>
<TabItem value="get_environment_account_connection">

In an environment account, get the detailed data for an environment account connection. For more information, see Environment account connections in the Proton User guide.

```sql
SELECT
id,
arn,
codebuildRoleArn,
componentRoleArn,
environmentAccountId,
environmentName,
lastModifiedAt,
managementAccountId,
requestedAt,
roleArn,
status
FROM aws.proton.environment_account_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_account_connections">

View a list of environment account connections. For more information, see Environment account connections in the Proton User guide.

```sql
SELECT
id,
arn,
componentRoleArn,
environmentAccountId,
environmentName,
lastModifiedAt,
managementAccountId,
requestedAt,
roleArn,
status
FROM aws.proton.environment_account_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_account_connection"
    values={[
        { label: 'create_environment_account_connection', value: 'create_environment_account_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_account_connection">

Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account. An environment account connection is a secure bi-directional connection between a management account and an environment account that maintains authorization and permissions. For more information, see Environment account connections in the Proton User guide.

```sql
INSERT INTO aws.proton.environment_account_connections (
clientToken,
codebuildRoleArn,
componentRoleArn,
environmentName,
managementAccountId,
roleArn,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ codebuildRoleArn }}',
'{{ componentRoleArn }}',
'{{ environmentName }}' /* required */,
'{{ managementAccountId }}' /* required */,
'{{ roleArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
environmentAccountConnection
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_account_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_account_connections resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        When included, if two identical requests are made with the same client token, Proton returns the environment account connection that the first request created.
    - name: codebuildRoleArn
      value: "{{ codebuildRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM service role in the environment account. Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
    - name: componentRoleArn
      value: "{{ componentRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM service role that Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account. You must specify componentRoleArn to allow directly defined components to be associated with any environments running in this account. For more information about components, see Proton components in the Proton User Guide.
    - name: environmentName
      value: "{{ environmentName }}"
      description: |
        The name of the Proton environment that's created in the associated management account.
    - name: managementAccountId
      value: "{{ managementAccountId }}"
      description: |
        The ID of the management account that accepts or rejects the environment account connection. You create and manage the Proton environment in this account. If the management account accepts the environment account connection, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. Proton uses this role to provision infrastructure resources in the associated environment account.
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_account_connection"
    values={[
        { label: 'update_environment_account_connection', value: 'update_environment_account_connection' }
    ]}
>
<TabItem value="update_environment_account_connection">

In an environment account, update an environment account connection to use a new IAM role. For more information, see Environment account connections in the Proton User guide.

```sql
UPDATE aws.proton.environment_account_connections
SET 
codebuildRoleArn = '{{ codebuildRoleArn }}',
componentRoleArn = '{{ componentRoleArn }}',
id = '{{ id }}',
roleArn = '{{ roleArn }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
RETURNING
environmentAccountConnection;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_account_connection"
    values={[
        { label: 'delete_environment_account_connection', value: 'delete_environment_account_connection' }
    ]}
>
<TabItem value="delete_environment_account_connection">

In an environment account, delete an environment account connection. After you delete an environment account connection that’s in use by an Proton environment, Proton can’t manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection. For more information, see Environment account connections in the Proton User guide.

```sql
DELETE FROM aws.proton.environment_account_connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
