--- 
title: log_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - log_sources
  - securitylake
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

Creates, updates, deletes, gets or lists a <code>log_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.log_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_log_sources"
    values={[
        { label: 'list_log_sources', value: 'list_log_sources' }
    ]}
>
<TabItem value="list_log_sources">

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>Specify the account from which you want to collect logs. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Specify the Regions from which you want to collect logs. (pattern: &lt;code&gt;^(us(-gov)?|af|ap|ca|eu|me|sa)-(central|north|(north(?:east|west))|south|south(?:east|west)|east|west)-\d+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>Specify the sources from which you want to collect logs.</td>
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
    <td><a href="#list_log_sources"><CopyableCode code="list_log_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the log sources.</td>
</tr>
<tr>
    <td><a href="#create_custom_log_source"><CopyableCode code="create_custom_log_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a>, <a href="#parameter-sourceName"><code>sourceName</code></a></td>
    <td></td>
    <td>Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source. In addition, this operation also creates an associated Glue table and an Glue crawler.</td>
</tr>
<tr>
    <td><a href="#create_aws_log_source"><CopyableCode code="create_aws_log_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td></td>
    <td>Adds a natively supported Amazon Web Services service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. Once you add an Amazon Web Services service as a source, Security Lake starts collecting logs and events from it. You can use this API only to enable natively supported Amazon Web Services services as a source. Use CreateCustomLogSource to enable data collection from a custom source.</td>
</tr>
<tr>
    <td><a href="#delete_aws_log_source"><CopyableCode code="delete_aws_log_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a natively supported Amazon Web Services service as an Amazon Security Lake source. You can remove a source for one or more Regions. When you remove the source, Security Lake stops collecting data from that source in the specified Regions and accounts, and subscribers can no longer consume new data from the source. However, subscribers can still consume data that Security Lake collected from the source before removal. You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts.</td>
</tr>
<tr>
    <td><a href="#delete_custom_log_source"><CopyableCode code="delete_custom_log_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-source_name"><code>source_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sourceVersion"><code>sourceVersion</code></a></td>
    <td>Removes a custom log source from Amazon Security Lake, to stop sending data from the custom source to Security Lake.</td>
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
<tr id="parameter-source_name">
    <td><CopyableCode code="source_name" /></td>
    <td><code>string</code></td>
    <td>The source name of custom log source that you want to delete.</td>
</tr>
<tr id="parameter-sourceVersion">
    <td><CopyableCode code="sourceVersion" /></td>
    <td><code>string</code></td>
    <td>The source version for the third-party custom source. You can limit the custom source removal to the specified source version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_log_sources"
    values={[
        { label: 'list_log_sources', value: 'list_log_sources' }
    ]}
>
<TabItem value="list_log_sources">

Retrieves the log sources.

```sql
SELECT
account,
region,
sources
FROM aws.securitylake.log_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_log_source"
    values={[
        { label: 'create_custom_log_source', value: 'create_custom_log_source' },
        { label: 'create_aws_log_source', value: 'create_aws_log_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_log_source">

Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region where you want to create a custom source. Security Lake can collect logs and events from third-party custom sources. After creating the appropriate IAM role to invoke Glue crawler, use this API to add a custom source name in Security Lake. This operation creates a partition in the Amazon S3 bucket for Security Lake as the target location for log files from the custom source. In addition, this operation also creates an associated Glue table and an Glue crawler.

```sql
INSERT INTO aws.securitylake.log_sources (
configuration,
eventClasses,
sourceName,
sourceVersion,
region
)
SELECT 
'{{ configuration }}' /* required */,
'{{ eventClasses }}',
'{{ sourceName }}' /* required */,
'{{ sourceVersion }}',
'{{ region }}'
RETURNING
source
;
```
</TabItem>
<TabItem value="create_aws_log_source">

Adds a natively supported Amazon Web Services service as an Amazon Security Lake source. Enables source types for member accounts in required Amazon Web Services Regions, based on the parameters you specify. You can choose any source type in any Region for either accounts that are part of a trusted organization or standalone accounts. Once you add an Amazon Web Services service as a source, Security Lake starts collecting logs and events from it. You can use this API only to enable natively supported Amazon Web Services services as a source. Use CreateCustomLogSource to enable data collection from a custom source.

```sql
INSERT INTO aws.securitylake.log_sources (
sources,
region
)
SELECT 
'{{ sources }}' /* required */,
'{{ region }}'
RETURNING
failed
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: log_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the log_sources resource.
    - name: configuration
      description: |
        The configuration used for the third-party custom source.
      value:
        crawlerConfiguration:
          roleArn: "{{ roleArn }}"
        providerIdentity:
          externalId: "{{ externalId }}"
          principal: "{{ principal }}"
    - name: eventClasses
      value:
        - "{{ eventClasses }}"
    - name: sourceName
      value: "{{ sourceName }}"
    - name: sourceVersion
      value: "{{ sourceVersion }}"
    - name: sources
      value:
        - accounts: "{{ accounts }}"
          regions: "{{ regions }}"
          sourceName: "{{ sourceName }}"
          sourceVersion: "{{ sourceVersion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_aws_log_source"
    values={[
        { label: 'delete_aws_log_source', value: 'delete_aws_log_source' },
        { label: 'delete_custom_log_source', value: 'delete_custom_log_source' }
    ]}
>
<TabItem value="delete_aws_log_source">

Removes a natively supported Amazon Web Services service as an Amazon Security Lake source. You can remove a source for one or more Regions. When you remove the source, Security Lake stops collecting data from that source in the specified Regions and accounts, and subscribers can no longer consume new data from the source. However, subscribers can still consume data that Security Lake collected from the source before removal. You can choose any source type in any Amazon Web Services Region for either accounts that are part of a trusted organization or standalone accounts.

```sql
DELETE FROM aws.securitylake.log_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_custom_log_source">

Removes a custom log source from Amazon Security Lake, to stop sending data from the custom source to Security Lake.

```sql
DELETE FROM aws.securitylake.log_sources
WHERE source_name = '{{ source_name }}' --required
AND region = '{{ region }}' --required
AND sourceVersion = '{{ sourceVersion }}'
;
```
</TabItem>
</Tabs>
