--- 
title: repositories_in_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories_in_domains
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

Creates, updates, deletes, gets or lists a <code>repositories_in_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repositories_in_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.repositories_in_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repositories_in_domain"
    values={[
        { label: 'list_repositories_in_domain', value: 'list_repositories_in_domain' }
    ]}
>
<TabItem value="list_repositories_in_domain">

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
    <td><a href="#list_repositories_in_domain"><CopyableCode code="list_repositories_in_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-administrator-account"><code>administrator-account</code></a>, <a href="#parameter-repository-prefix"><code>repository-prefix</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of RepositorySummary objects. Each RepositorySummary contains information about a repository in the specified domain and that matches the input parameters.</td>
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
    <td>The name of the domain that contains the returned list of repositories.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-administrator-account">
    <td><CopyableCode code="administrator-account" /></td>
    <td><code>string</code></td>
    <td>Filter the list of repositories to only include those that are managed by the Amazon Web Services account ID.</td>
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
    defaultValue="list_repositories_in_domain"
    values={[
        { label: 'list_repositories_in_domain', value: 'list_repositories_in_domain' }
    ]}
>
<TabItem value="list_repositories_in_domain">

Returns a list of RepositorySummary objects. Each RepositorySummary contains information about a repository in the specified domain and that matches the input parameters.

```sql
SELECT
name,
administratorAccount,
arn,
createdTime,
description,
domainName,
domainOwner
FROM aws.codeartifact.repositories_in_domains
WHERE domain = '{{ domain }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND `administrator-account` = '{{ administrator-account }}'
AND `repository-prefix` = '{{ repository-prefix }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
