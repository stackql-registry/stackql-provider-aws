--- 
title: data_lakes
hide_title: false
hide_table_of_contents: false
keywords:
  - data_lakes
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

Creates, updates, deletes, gets or lists a <code>data_lakes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_lakes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securitylake.data_lakes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_lakes"
    values={[
        { label: 'list_data_lakes', value: 'list_data_lakes' }
    ]}
>
<TabItem value="list_data_lakes">

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
    <td><CopyableCode code="dataLakes" /></td>
    <td><code>array</code></td>
    <td>Retrieves the Security Lake configuration object.</td>
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
    <td><a href="#list_data_lakes"><CopyableCode code="list_data_lakes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-regions"><code>regions</code></a></td>
    <td>Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services Regions. You can use this operation to determine whether Security Lake is enabled for a Region.</td>
</tr>
<tr>
    <td><a href="#create_data_lake"><CopyableCode code="create_data_lake" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configurations"><code>configurations</code></a>, <a href="#parameter-metaStoreManagerRoleArn"><code>metaStoreManagerRoleArn</code></a></td>
    <td></td>
    <td>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. To specify particular Regions, configure these Regions using the configurations parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations. When you enable Security Lake, it starts ingesting security data after the CreateAwsLogSource call and after you create subscribers using the CreateSubscriber API. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide.</td>
</tr>
<tr>
    <td><a href="#register_data_lake_delegated_administrator"><CopyableCode code="register_data_lake_delegated_administrator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountId"><code>accountId</code></a></td>
    <td></td>
    <td>Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.</td>
</tr>
<tr>
    <td><a href="#update_data_lake"><CopyableCode code="update_data_lake" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configurations"><code>configurations</code></a></td>
    <td></td>
    <td>You can use UpdateDataLake to specify where to store your security data, how it should be encrypted at rest and for how long. You can add a Rollup Region to consolidate data from multiple Amazon Web Services Regions, replace default encryption (SSE-S3) with Customer Manged Key, or specify transition and expiration actions through storage Lifecycle management. The UpdateDataLake API works as an "upsert" operation that performs an insert if the specified item or record does not exist, or an update if it already exists. Security Lake securely stores your data at rest using Amazon Web Services encryption solutions. For more details, see Data protection in Amazon Security Lake. For example, omitting the key encryptionConfiguration from a Region that is included in an update call that currently uses KMS will leave that Region's KMS key in place, but specifying encryptionConfiguration: &#123;kmsKeyId: 'S3_MANAGED_KEY'&#125; for that same Region will reset the key to S3-managed. For more details about lifecycle management and how to update retention settings for one or more Regions after enabling Security Lake, see the Amazon Security Lake User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_data_lake"><CopyableCode code="delete_data_lake" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>When you disable Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions and it stops collecting data from your sources. Also, this API automatically takes steps to remove the account from Security Lake. However, Security Lake retains all of your existing settings and the resources that it created in your Amazon Web Services account in the current Amazon Web Services Region. The DeleteDataLake operation does not delete the data that is stored in your Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the Amazon Security Lake User Guide.</td>
</tr>
<tr>
    <td><a href="#deregister_data_lake_delegated_administrator"><CopyableCode code="deregister_data_lake_delegated_administrator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.</td>
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
<tr id="parameter-regions">
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The list of Regions where Security Lake is enabled.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_data_lakes"
    values={[
        { label: 'list_data_lakes', value: 'list_data_lakes' }
    ]}
>
<TabItem value="list_data_lakes">

Retrieves the Amazon Security Lake configuration object for the specified Amazon Web Services Regions. You can use this operation to determine whether Security Lake is enabled for a Region.

```sql
SELECT
dataLakes
FROM aws.securitylake.data_lakes
WHERE region = '{{ region }}' -- required
AND regions = '{{ regions }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_lake"
    values={[
        { label: 'create_data_lake', value: 'create_data_lake' },
        { label: 'register_data_lake_delegated_administrator', value: 'register_data_lake_delegated_administrator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_lake">

Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Amazon Web Services Regions with customized settings before enabling log collection in Regions. To specify particular Regions, configure these Regions using the configurations parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations. When you enable Security Lake, it starts ingesting security data after the CreateAwsLogSource call and after you create subscribers using the CreateSubscriber API. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your Amazon Web Services account in the current Region, including security log and event data. For more information, see the Amazon Security Lake User Guide.

```sql
INSERT INTO aws.securitylake.data_lakes (
configurations,
metaStoreManagerRoleArn,
tags,
region
)
SELECT 
'{{ configurations }}' /* required */,
'{{ metaStoreManagerRoleArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
dataLakes
;
```
</TabItem>
<TabItem value="register_data_lake_delegated_administrator">

Designates the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

```sql
INSERT INTO aws.securitylake.data_lakes (
accountId,
region
)
SELECT 
'{{ accountId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_lakes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_lakes resource.
    - name: configurations
      value:
        - encryptionConfiguration:
            kmsKeyId: "{{ kmsKeyId }}"
          lifecycleConfiguration:
            expiration:
              days: {{ days }}
            transitions:
              - days: {{ days }}
                storageClass: "{{ storageClass }}"
          region: "{{ region }}"
          replicationConfiguration:
            regions:
              - "{{ regions }}"
            roleArn: "{{ roleArn }}"
    - name: metaStoreManagerRoleArn
      value: "{{ metaStoreManagerRoleArn }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: accountId
      value: "{{ accountId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_lake"
    values={[
        { label: 'update_data_lake', value: 'update_data_lake' }
    ]}
>
<TabItem value="update_data_lake">

You can use UpdateDataLake to specify where to store your security data, how it should be encrypted at rest and for how long. You can add a Rollup Region to consolidate data from multiple Amazon Web Services Regions, replace default encryption (SSE-S3) with Customer Manged Key, or specify transition and expiration actions through storage Lifecycle management. The UpdateDataLake API works as an "upsert" operation that performs an insert if the specified item or record does not exist, or an update if it already exists. Security Lake securely stores your data at rest using Amazon Web Services encryption solutions. For more details, see Data protection in Amazon Security Lake. For example, omitting the key encryptionConfiguration from a Region that is included in an update call that currently uses KMS will leave that Region's KMS key in place, but specifying encryptionConfiguration: &#123;kmsKeyId: 'S3_MANAGED_KEY'&#125; for that same Region will reset the key to S3-managed. For more details about lifecycle management and how to update retention settings for one or more Regions after enabling Security Lake, see the Amazon Security Lake User Guide.

```sql
UPDATE aws.securitylake.data_lakes
SET 
configurations = '{{ configurations }}',
metaStoreManagerRoleArn = '{{ metaStoreManagerRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND configurations = '{{ configurations }}' --required
RETURNING
dataLakes;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_lake"
    values={[
        { label: 'delete_data_lake', value: 'delete_data_lake' },
        { label: 'deregister_data_lake_delegated_administrator', value: 'deregister_data_lake_delegated_administrator' }
    ]}
>
<TabItem value="delete_data_lake">

When you disable Amazon Security Lake from your account, Security Lake is disabled in all Amazon Web Services Regions and it stops collecting data from your sources. Also, this API automatically takes steps to remove the account from Security Lake. However, Security Lake retains all of your existing settings and the resources that it created in your Amazon Web Services account in the current Amazon Web Services Region. The DeleteDataLake operation does not delete the data that is stored in your Amazon S3 bucket, which is owned by your Amazon Web Services account. For more information, see the Amazon Security Lake User Guide.

```sql
DELETE FROM aws.securitylake.data_lakes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="deregister_data_lake_delegated_administrator">

Deletes the Amazon Security Lake delegated administrator account for the organization. This API can only be called by the organization management account. The organization management account cannot be the delegated administrator account.

```sql
DELETE FROM aws.securitylake.data_lakes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
