--- 
title: findings_publication_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_publication_configurations
  - macie2
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

Creates, updates, deletes, gets or lists a <code>findings_publication_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_publication_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.findings_publication_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings_publication_configuration"
    values={[
        { label: 'get_findings_publication_configuration', value: 'get_findings_publication_configuration' }
    ]}
>
<TabItem value="get_findings_publication_configuration">

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
    <td><CopyableCode code="publish_classification_findings" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to publish sensitive data findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all sensitive data findings that weren't suppressed by a findings filter. The default value is false.</td>
</tr>
<tr>
    <td><CopyableCode code="publish_policy_findings" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to publish policy findings to Security Hub. If you set this value to true, Amazon Macie automatically publishes all new and updated policy findings that weren't suppressed by a findings filter. The default value is true.</td>
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
    <td><a href="#get_findings_publication_configuration"><CopyableCode code="get_findings_publication_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration settings for publishing findings to Security Hub.</td>
</tr>
<tr>
    <td><a href="#put_findings_publication_configuration"><CopyableCode code="put_findings_publication_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration settings for publishing findings to Security Hub.</td>
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
    defaultValue="get_findings_publication_configuration"
    values={[
        { label: 'get_findings_publication_configuration', value: 'get_findings_publication_configuration' }
    ]}
>
<TabItem value="get_findings_publication_configuration">

Retrieves the configuration settings for publishing findings to Security Hub.

```sql
SELECT
publish_classification_findings,
publish_policy_findings
FROM aws.macie2.findings_publication_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_findings_publication_configuration"
    values={[
        { label: 'put_findings_publication_configuration', value: 'put_findings_publication_configuration' }
    ]}
>
<TabItem value="put_findings_publication_configuration">

Updates the configuration settings for publishing findings to Security Hub.

```sql
REPLACE aws.macie2.findings_publication_configurations
SET 
clientToken = '{{ clientToken }}',
securityHubConfiguration = '{{ securityHubConfiguration }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
