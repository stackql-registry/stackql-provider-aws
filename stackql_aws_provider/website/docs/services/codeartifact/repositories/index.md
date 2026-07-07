--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
  - codeartifact
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_repository"
    values={[
        { label: 'describe_repository', value: 'describe_repository' },
        { label: 'list_repositories', value: 'list_repositories' }
    ]}
>
<TabItem value="describe_repository">

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
    <td>The name of the repository. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9._\-&#93;&#123;1,99&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="administratorAccount" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that manages the repository. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the repository. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that represents the date and time the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A text description of the repository. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;&#123;0,48&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainOwner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="externalConnections" /></td>
    <td><code>array</code></td>
    <td>An array of external connections associated with the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="upstreams" /></td>
    <td><code>array</code></td>
    <td>A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when CodeArtifact looks for a requested package version. For more information, see Working with upstream repositories.</td>
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
    <td>The name of the repository. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9._\-&#93;&#123;1,99&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="administratorAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that manages the repository. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the repository. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that represents the date and time the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the repository. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9\-&#93;&#123;0,48&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainOwner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_repository"><CopyableCode code="describe_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Returns a RepositoryDescription object that contains detailed information about the requested repository.</td>
</tr>
<tr>
    <td><a href="#list_repositories"><CopyableCode code="list_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-repository-prefix"><code>repository-prefix</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of RepositorySummary objects. Each RepositorySummary contains information about a repository in the specified Amazon Web Services account and that matches the input parameters.</td>
</tr>
<tr>
    <td><a href="#create_repository"><CopyableCode code="create_repository" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Creates a repository.</td>
</tr>
<tr>
    <td><a href="#update_repository"><CopyableCode code="update_repository" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Update the properties of a repository.</td>
</tr>
<tr>
    <td><a href="#delete_repository"><CopyableCode code="delete_repository" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a></td>
    <td>Deletes a repository.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository to delete.</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-repository-prefix">
    <td><CopyableCode code="repository-prefix" /></td>
    <td><code>string</code></td>
    <td>A prefix used to filter returned repositories. Only repositories with names that start with repositoryPrefix are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_repository"
    values={[
        { label: 'describe_repository', value: 'describe_repository' },
        { label: 'list_repositories', value: 'list_repositories' }
    ]}
>
<TabItem value="describe_repository">

Returns a RepositoryDescription object that contains detailed information about the requested repository.

```sql
SELECT
name,
administratorAccount,
arn,
createdTime,
description,
domainName,
domainOwner,
externalConnections,
upstreams
FROM aws.codeartifact.repositories
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
;
```
</TabItem>
<TabItem value="list_repositories">

Returns a list of RepositorySummary objects. Each RepositorySummary contains information about a repository in the specified Amazon Web Services account and that matches the input parameters.

```sql
SELECT
name,
administratorAccount,
arn,
createdTime,
description,
domainName,
domainOwner
FROM aws.codeartifact.repositories
WHERE region = '{{ region }}' -- required
AND `repository-prefix` = '{{ repository-prefix }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
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

Creates a repository.

```sql
INSERT INTO aws.codeartifact.repositories (
description,
upstreams,
tags,
domain,
repository,
region,
`domain-owner`
)
SELECT 
'{{ description }}',
'{{ upstreams }}',
'{{ tags }}',
'{{ domain }}',
'{{ repository }}',
'{{ region }}',
'{{ domain-owner }}'
RETURNING
repository
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repositories
  props:
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the repositories resource.
    - name: repository
      value: "{{ repository }}"
      description: Required parameter for the repositories resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the repositories resource.
    - name: description
      value: "{{ description }}"
    - name: upstreams
      value:
        - repositoryName: "{{ repositoryName }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: domain-owner
      value: "{{ domain-owner }}"
      description: The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
      description: The 12-digit account number of the Amazon Web Services account that owns the domain. It does not include dashes or spaces.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_repository"
    values={[
        { label: 'update_repository', value: 'update_repository' }
    ]}
>
<TabItem value="update_repository">

Update the properties of a repository.

```sql
UPDATE aws.codeartifact.repositories
SET 
description = '{{ description }}',
upstreams = '{{ upstreams }}'
WHERE 
domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner}}'
RETURNING
repository;
```
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

Deletes a repository.

```sql
DELETE FROM aws.codeartifact.repositories
WHERE domain = '{{ domain }}' --required
AND repository = '{{ repository }}' --required
AND region = '{{ region }}' --required
AND `domain-owner` = '{{ domain-owner }}'
;
```
</TabItem>
</Tabs>
