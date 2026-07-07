--- 
title: packages_for_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - packages_for_domains
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>packages_for_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="packages_for_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.packages_for_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_packages_for_domain"
    values={[
        { label: 'list_packages_for_domain', value: 'list_packages_for_domain' }
    ]}
>
<TabItem value="list_packages_for_domain">

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
    <td><CopyableCode code="DomainPackageDetailsList" /></td>
    <td><code>array</code></td>
    <td>List of all packages associated with a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
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
    <td><a href="#list_packages_for_domain"><CopyableCode code="list_packages_for_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all packages associated with an Amazon OpenSearch Service domain. For more information, see Custom packages for Amazon OpenSearch Service.</td>
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
    <td>The name of the domain for which you want to list associated packages.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListPackagesForDomain operation returns a nextToken, you can include the returned nextToken in subsequent ListPackagesForDomain operations, which returns results in the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_packages_for_domain"
    values={[
        { label: 'list_packages_for_domain', value: 'list_packages_for_domain' }
    ]}
>
<TabItem value="list_packages_for_domain">

Lists all packages associated with an Amazon OpenSearch Service domain. For more information, see Custom packages for Amazon OpenSearch Service.

```sql
SELECT
DomainPackageDetailsList,
NextToken
FROM aws.opensearch.packages_for_domains
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
