--- 
title: repository_catalog_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_catalog_datas
  - ecr_public
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

Creates, updates, deletes, gets or lists a <code>repository_catalog_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_catalog_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr_public.repository_catalog_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_catalog_data"
    values={[
        { label: 'get_repository_catalog_data', value: 'get_repository_catalog_data' }
    ]}
>
<TabItem value="get_repository_catalog_data">

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
    <td><CopyableCode code="aboutText" /></td>
    <td><code>string</code></td>
    <td>The longform description of the contents of the repository. This text appears in the repository details on the Amazon ECR Public Gallery.</td>
</tr>
<tr>
    <td><CopyableCode code="architectures" /></td>
    <td><code>array</code></td>
    <td>The architecture tags that are associated with the repository. Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For more information, see RepositoryCatalogDataInput.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The short description of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="logoUrl" /></td>
    <td><code>string</code></td>
    <td>The URL that contains the logo that's associated with the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="marketplaceCertified" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the repository is certified by Amazon Web Services Marketplace.</td>
</tr>
<tr>
    <td><CopyableCode code="operatingSystems" /></td>
    <td><code>array</code></td>
    <td>The operating system tags that are associated with the repository. Only supported operating system tags appear publicly in the Amazon ECR Public Gallery. For more information, see RepositoryCatalogDataInput.</td>
</tr>
<tr>
    <td><CopyableCode code="usageText" /></td>
    <td><code>string</code></td>
    <td>The longform usage details of the contents of the repository. The usage text provides context for users of the repository.</td>
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
    <td><a href="#get_repository_catalog_data"><CopyableCode code="get_repository_catalog_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.</td>
</tr>
<tr>
    <td><a href="#put_repository_catalog_data"><CopyableCode code="put_repository_catalog_data" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-catalogData"><code>catalogData</code></a></td>
    <td></td>
    <td>Creates or updates the catalog data for a repository in a public registry.</td>
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
    defaultValue="get_repository_catalog_data"
    values={[
        { label: 'get_repository_catalog_data', value: 'get_repository_catalog_data' }
    ]}
>
<TabItem value="get_repository_catalog_data">

Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.

```sql
SELECT
aboutText,
architectures,
description,
logoUrl,
marketplaceCertified,
operatingSystems,
usageText
FROM aws.ecr_public.repository_catalog_datas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_repository_catalog_data"
    values={[
        { label: 'put_repository_catalog_data', value: 'put_repository_catalog_data' }
    ]}
>
<TabItem value="put_repository_catalog_data">

Creates or updates the catalog data for a repository in a public registry.

```sql
REPLACE aws.ecr_public.repository_catalog_datas
SET 
registryId = '{{ registryId }}',
repositoryName = '{{ repositoryName }}',
catalogData = '{{ catalogData }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND catalogData = '{{ catalogData }}' --required
RETURNING
catalogData;
```
</TabItem>
</Tabs>
