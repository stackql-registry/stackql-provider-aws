--- 
title: scrapers
hide_title: false
hide_table_of_contents: false
keywords:
  - scrapers
  - amp
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

Creates, updates, deletes, gets or lists a <code>scrapers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scrapers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amp.scrapers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scraper"
    values={[
        { label: 'describe_scraper', value: 'describe_scraper' },
        { label: 'list_scrapers', value: 'list_scrapers' }
    ]}
>
<TabItem value="describe_scraper">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>An optional user-assigned scraper alias. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scraper. For example, arn:aws:aps:<code>&lt;region&gt;</code>:123456798012:scraper/s-example1-1234-abcd-5678-ef9012abcd34.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the scraper was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Where to send the metrics from a scraper.</td>
</tr>
<tr>
    <td><CopyableCode code="exporters" /></td>
    <td><code>array</code></td>
    <td>A list of exporter configurations for a scraper. You can configure at most one Amazon OpenSearch Service domain.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the scraper was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf. For example, arn:aws:iam::123456789012:role/service-role/AmazonGrafanaServiceRole-12example. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_configuration" /></td>
    <td><code>object</code></td>
    <td>Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="scrape_configuration" /></td>
    <td><code>object</code></td>
    <td>A scrape configuration for a scraper, base 64 encoded. For more information, see Scraper configuration in the Amazon Managed Service for Prometheus User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="scraper_id" /></td>
    <td><code>string</code></td>
    <td>A scraper ID. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of collected metrics for a scraper.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the current status of the scraper.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>If there is a failure, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>(Optional) The list of tag keys and values associated with the scraper.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scrapers">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>An optional user-assigned scraper alias. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scraper.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the scraper was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Where to send the metrics from a scraper.</td>
</tr>
<tr>
    <td><CopyableCode code="exporters" /></td>
    <td><code>array</code></td>
    <td>A list of exporter configurations for a scraper. You can configure at most one Amazon OpenSearch Service domain.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the scraper was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_configuration" /></td>
    <td><code>object</code></td>
    <td>Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="scraper_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the scraper. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#91;-.0-9A-Z_a-z&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of collected metrics for a scraper.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the current status of the scraper.</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>If there is a failure, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>(Optional) The list of tag keys and values associated with the scraper.</td>
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
    <td><a href="#describe_scraper"><CopyableCode code="describe_scraper" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scraper_id"><code>scraper_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The DescribeScraper operation displays information about an existing scraper.</td>
</tr>
<tr>
    <td><a href="#list_scrapers"><CopyableCode code="list_scrapers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-filters"><code>filters</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>The ListScrapers operation lists all of the scrapers in your account. This includes scrapers being created or deleted. You can optionally filter the returned list.</td>
</tr>
<tr>
    <td><a href="#create_scraper"><CopyableCode code="create_scraper" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scrapeConfiguration"><code>scrapeConfiguration</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-destination"><code>destination</code></a></td>
    <td></td>
    <td>Creates a scraper to collect metrics from Prometheus-compatible sources. The scraper sends the collected metrics to Amazon Managed Service for Prometheus workspaces or CloudWatch datasets. You can configure scrapers to collect metrics from Amazon EKS clusters, Amazon MSK clusters, or from VPC-based sources that support DNS-based service discovery. Scrapers are flexible. You can configure a scraper to control which metrics to collect, the frequency of collection, which transformations to apply to the metrics, and more. An IAM role will be created for you that Amazon Managed Service for Prometheus uses to access the metrics in your source. You must configure this role with a policy that allows it to scrape metrics from your source. For Amazon EKS sources, see Configuring your Amazon EKS cluster in the Amazon Managed Service for Prometheus User Guide. The scrapeConfiguration parameter contains the base-64 encoded YAML configuration for the scraper. When creating a scraper, the service creates a Network Interface in each Availability Zone that are passed into CreateScraper through subnets. These network interfaces are used to connect to your source within the VPC for scraping metrics. For more information about collectors, including what metrics are collected, and how to configure the scraper, see Using an Amazon Web Services managed collector in the Amazon Managed Service for Prometheus User Guide.</td>
</tr>
<tr>
    <td><a href="#update_scraper"><CopyableCode code="update_scraper" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-scraper_id"><code>scraper_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing scraper. You can't use this function to update the source from which the scraper is collecting metrics. To change the source, delete the scraper and create a new one.</td>
</tr>
<tr>
    <td><a href="#delete_scraper"><CopyableCode code="delete_scraper" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-scraper_id"><code>scraper_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>The DeleteScraper operation deletes one scraper, and stops any metrics collection that the scraper performs.</td>
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
<tr id="parameter-scraper_id">
    <td><CopyableCode code="scraper_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the scraper to delete.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-filters">
    <td><CopyableCode code="filters" /></td>
    <td><code>object</code></td>
    <td>(Optional) A list of key-value pairs to filter the list of scrapers returned. Keys include status, sourceArn, destinationArn, and alias. Filters on the same key are OR'd together, and filters on different keys are AND'd together. For example, status=ACTIVE&status=CREATING&alias=Test, will return all scrapers that have the alias Test, and are either in status ACTIVE or CREATING. To find all active scrapers that are sending metrics to a specific Amazon Managed Service for Prometheus workspace, you would use the ARN of the workspace in a query: status=ACTIVE&destinationArn=arn:aws:aps:us-east-1:123456789012:workspace/ws-example1-1234-abcd-56ef-123456789012 If this is included, it filters the results to only the scrapers that match the filter.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Optional) The maximum number of scrapers to return in one ListScrapers operation. The range is 1-1000. If you omit this parameter, the default of 100 is used.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>(Optional) The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scraper"
    values={[
        { label: 'describe_scraper', value: 'describe_scraper' },
        { label: 'list_scrapers', value: 'list_scrapers' }
    ]}
>
<TabItem value="describe_scraper">

The DescribeScraper operation displays information about an existing scraper.

```sql
SELECT
alias,
arn,
created_at,
destination,
exporters,
last_modified_at,
role_arn,
role_configuration,
scrape_configuration,
scraper_id,
source,
status,
status_reason,
tags
FROM aws.amp.scrapers
WHERE scraper_id = '{{ scraper_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scrapers">

The ListScrapers operation lists all of the scrapers in your account. This includes scrapers being created or deleted. You can optionally filter the returned list.

```sql
SELECT
alias,
arn,
created_at,
destination,
exporters,
last_modified_at,
role_arn,
role_configuration,
scraper_id,
source,
status,
status_reason,
tags
FROM aws.amp.scrapers
WHERE region = '{{ region }}' -- required
AND filters = '{{ filters }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scraper"
    values={[
        { label: 'create_scraper', value: 'create_scraper' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scraper">

Creates a scraper to collect metrics from Prometheus-compatible sources. The scraper sends the collected metrics to Amazon Managed Service for Prometheus workspaces or CloudWatch datasets. You can configure scrapers to collect metrics from Amazon EKS clusters, Amazon MSK clusters, or from VPC-based sources that support DNS-based service discovery. Scrapers are flexible. You can configure a scraper to control which metrics to collect, the frequency of collection, which transformations to apply to the metrics, and more. An IAM role will be created for you that Amazon Managed Service for Prometheus uses to access the metrics in your source. You must configure this role with a policy that allows it to scrape metrics from your source. For Amazon EKS sources, see Configuring your Amazon EKS cluster in the Amazon Managed Service for Prometheus User Guide. The scrapeConfiguration parameter contains the base-64 encoded YAML configuration for the scraper. When creating a scraper, the service creates a Network Interface in each Availability Zone that are passed into CreateScraper through subnets. These network interfaces are used to connect to your source within the VPC for scraping metrics. For more information about collectors, including what metrics are collected, and how to configure the scraper, see Using an Amazon Web Services managed collector in the Amazon Managed Service for Prometheus User Guide.

```sql
INSERT INTO aws.amp.scrapers (
alias,
scrapeConfiguration,
source,
destination,
roleConfiguration,
clientToken,
tags,
exporters,
region
)
SELECT 
'{{ alias }}',
'{{ scrapeConfiguration }}' /* required */,
'{{ source }}' /* required */,
'{{ destination }}' /* required */,
'{{ roleConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ exporters }}',
'{{ region }}'
RETURNING
arn,
scraper_id,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scrapers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scrapers resource.
    - name: alias
      value: "{{ alias }}"
      description: |
        An optional user-assigned scraper alias.
    - name: scrapeConfiguration
      description: |
        A scrape configuration for a scraper, base 64 encoded. For more information, see Scraper configuration in the Amazon Managed Service for Prometheus User Guide.
      value:
        configurationBlob: "{{ configurationBlob }}"
    - name: source
      description: |
        The source of collected metrics for a scraper.
      value:
        eksConfiguration:
          clusterArn: "{{ clusterArn }}"
          securityGroupIds:
            - "{{ securityGroupIds }}"
          subnetIds:
            - "{{ subnetIds }}"
        vpcConfiguration:
          securityGroupIds:
            - "{{ securityGroupIds }}"
          subnetIds:
            - "{{ subnetIds }}"
    - name: destination
      description: |
        Where to send the metrics from a scraper.
      value:
        ampConfiguration:
          workspaceArn: "{{ workspaceArn }}"
        cloudWatchConfiguration:
          datasetArn: "{{ datasetArn }}"
    - name: roleConfiguration
      description: |
        Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.
      value:
        sourceRoleArn: "{{ sourceRoleArn }}"
        targetRoleArn: "{{ targetRoleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier used to ensure the idempotency of a write request.
    - name: tags
      value: "{{ tags }}"
      description: |
        A tag associated with a resource.
    - name: exporters
      description: |
        A list of exporter configurations for a scraper. You can configure at most one Amazon OpenSearch Service domain.
      value:
        - openSearchConfiguration:
            domainArn: "{{ domainArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scraper"
    values={[
        { label: 'update_scraper', value: 'update_scraper' }
    ]}
>
<TabItem value="update_scraper">

Updates an existing scraper. You can't use this function to update the source from which the scraper is collecting metrics. To change the source, delete the scraper and create a new one.

```sql
UPDATE aws.amp.scrapers
SET 
alias = '{{ alias }}',
scrapeConfiguration = '{{ scrapeConfiguration }}',
destination = '{{ destination }}',
roleConfiguration = '{{ roleConfiguration }}',
clientToken = '{{ clientToken }}',
exporters = '{{ exporters }}'
WHERE 
scraper_id = '{{ scraper_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
scraper_id,
status,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scraper"
    values={[
        { label: 'delete_scraper', value: 'delete_scraper' }
    ]}
>
<TabItem value="delete_scraper">

The DeleteScraper operation deletes one scraper, and stops any metrics collection that the scraper performs.

```sql
DELETE FROM aws.amp.scrapers
WHERE scraper_id = '{{ scraper_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
