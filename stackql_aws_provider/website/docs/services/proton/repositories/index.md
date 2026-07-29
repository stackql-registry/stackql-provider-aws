--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
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

Creates, updates, deletes, gets or lists a <code>repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository"
    values={[
        { label: 'get_repository', value: 'get_repository' },
        { label: 'list_repositories', value: 'list_repositories' }
    ]}
>
<TabItem value="get_repository">

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
    <td>The repository name. (pattern: &lt;code&gt;&#91;A-Za-z0-9_.-&#93;.*/&#91;A-Za-z0-9_.-&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the linked repository.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key" /></td>
    <td><code>string</code></td>
    <td>Your customer Amazon Web Services KMS encryption key. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The repository provider. (GITHUB, GITHUB_ENTERPRISE, BITBUCKET)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repositories">

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
    <td>The repository name. (pattern: &lt;code&gt;&#91;A-Za-z0-9_.-&#93;.*/&#91;A-Za-z0-9_.-&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the linked repository.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the of your connection that connects Proton to your repository. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The repository provider. (GITHUB, GITHUB_ENTERPRISE, BITBUCKET)</td>
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
    <td><a href="#get_repository"><CopyableCode code="get_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detail data for a linked repository.</td>
</tr>
<tr>
    <td><a href="#list_repositories"><CopyableCode code="list_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List linked repositories with detail data.</td>
</tr>
<tr>
    <td><a href="#create_repository"><CopyableCode code="create_repository" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionArn"><code>connectionArn</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-provider"><code>provider</code></a></td>
    <td></td>
    <td>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a service-linked role for you. For more information, see Self-managed provisioning, Template bundles, and Template sync configurations in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_repository"><CopyableCode code="delete_repository" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>De-register and unlink your repository.</td>
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
    defaultValue="get_repository"
    values={[
        { label: 'get_repository', value: 'get_repository' },
        { label: 'list_repositories', value: 'list_repositories' }
    ]}
>
<TabItem value="get_repository">

Get detail data for a linked repository.

```sql
SELECT
name,
arn,
connection_arn,
encryption_key,
provider
FROM aws.proton.repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_repositories">

List linked repositories with detail data.

```sql
SELECT
name,
arn,
connection_arn,
provider
FROM aws.proton.repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_repository"
    values={[
        { label: 'create_repository', value: 'create_repository' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repository">

Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed provisioning, or synced templates). When you create a repository link, Proton creates a service-linked role for you. For more information, see Self-managed provisioning, Template bundles, and Template sync configurations in the Proton User Guide.

```sql
INSERT INTO aws.proton.repositories (
connectionArn,
encryptionKey,
name,
provider,
tags,
region
)
SELECT 
'{{ connectionArn }}' /* required */,
'{{ encryptionKey }}',
'{{ name }}' /* required */,
'{{ provider }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
repository
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repositories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the repositories resource.
    - name: connectionArn
      value: "{{ connectionArn }}"
      description: |
        The Amazon Resource Name (ARN) of your AWS CodeStar connection that connects Proton to your repository provider account. For more information, see Setting up for Proton in the Proton User Guide.
    - name: encryptionKey
      value: "{{ encryptionKey }}"
      description: |
        The ARN of your customer Amazon Web Services Key Management Service (Amazon Web Services KMS) key.
    - name: name
      value: "{{ name }}"
      description: |
        The repository name (for example, myrepos/myrepo).
    - name: provider
      value: "{{ provider }}"
      description: |
        The repository provider.
      valid_values: ['GITHUB', 'GITHUB_ENTERPRISE', 'BITBUCKET']
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton repository. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repository"
    values={[
        { label: 'delete_repository', value: 'delete_repository' }
    ]}
>
<TabItem value="delete_repository">

De-register and unlink your repository.

```sql
DELETE FROM aws.proton.repositories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
